from selenium import webdriver
from selenium.webdriver.common.by  import By
from selenium.webdriver.common.keys import Keys
import time
import re
from datetime import datetime
from pythondb import insert_game

import sys

# Get the parameter passed from the JavaScript request
search_game = sys.argv[1] if len(sys.argv) > 1 else ''

class Game:
    def __init__(self, title, img_src, desc, rating, rating_num, release_date, developer, publisher, price):
        self.title = title
        self.img_src = img_src
        self.desc = desc
        self.rating = rating
        self.rating_num = rating_num
        self.release_date = release_date
        self.developer = developer
        self.publisher = publisher
        self.price = price

    def __str__(self):
        print(type(self.price))
        print(type(self.release_date))
        return (f"Title: {self.title}\n"
                f"Image Source: {self.img_src}\n"
                f"Description: {self.desc}\n"
                f"Rating: {self.rating}\n"
                f"{self.rating_num}\n"
                f"Release Date: {self.release_date}\n"
                f"Developer: {self.developer}\n"
                f"Publisher: {self.publisher}\n"
                f"{self.price}\n"
                )


def convert_rating_num(rating_num):
    try:
        # Remove non-numeric characters and convert to int
        # Remove parentheses and any other non-digit characters
        cleaned_num = re.sub(r'[^\d]', '', str(rating_num))
        return int(cleaned_num)
    except ValueError:
        return None

def convert_release_date(release_date):
    try:
        # Convert date format from '13 Jul, 2023' to '2023-07-13'
        return datetime.strptime(release_date, '%d %b, %Y').strftime('%Y-%m-%d')
    except ValueError:
        # If the format does not match, return None
        return None

def convert_price(price):
    try:
        # Remove currency symbols and convert to decimal
        return float(re.sub(r'[^\d.]', '', price))
    except ValueError:
        return None
    
game_list = []
driver = webdriver.Chrome()

driver.get("https://store.steampowered.com")

time.sleep(2)
search = driver.find_element(By.ID, "store_nav_search_term")
search.send_keys("Apex Legends")
search.send_keys(Keys.RETURN)

time.sleep(2)
search_result = driver.find_elements(By.CLASS_NAME, "search_result_row") #search result list

for i in range(1):
    time.sleep(2)
    search_result[i].click()
    time.sleep(2)

    try: #bypass age restricted games
        title = driver.find_element(By.ID, "appHubAppName").text
        img_src = driver.find_element(By.ID, "gameHeaderImageCtn").find_element(By.TAG_NAME, "img").get_attribute("src")
        desc = driver.find_element(By.CLASS_NAME, "game_description_snippet").text
        rating = driver.find_element(By.CSS_SELECTOR, ".summary.column").find_element(By.CSS_SELECTOR, "span[class^='game_review']").text
        ratingNum = driver.find_element(By.CSS_SELECTOR, ".summary.column").find_element(By.CSS_SELECTOR, "span[class^='responsive_hidden']").text
        releaseDate = driver.find_element(By.CLASS_NAME, "date").text
        devs = driver.find_elements(By.CLASS_NAME, "dev_row")
        developer = devs[0].find_element(By.CSS_SELECTOR, "div.summary.column").text
        publisher = devs[1].find_element(By.CSS_SELECTOR, "div.summary.column").text
        price = driver.find_element(By.CSS_SELECTOR, "div.game_purchase_price.price").text

        

        rating_num = convert_rating_num(ratingNum)
        release_date = convert_release_date(releaseDate)
        if(price != "Free To Play"):
            price = convert_price(price)
        else:
            price = 0

        game = (Game(title, img_src, desc, rating, rating_num, release_date, developer, publisher, price))
        game_list.append(game)

    except:pass
    driver.back()
    driver.refresh()
    time.sleep(2)
    search_result = driver.find_elements(By.CLASS_NAME, "search_result_row") #search result list

insert_game(game_list)