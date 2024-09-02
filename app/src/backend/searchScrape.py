from selenium import webdriver
from selenium.webdriver.common.by  import By
from selenium.webdriver.common.keys import Keys
import time

class Game:
    def __init__(self, title, price, img_src, release_date, platform):
        self.title = title
        self.price = price
        self.img_src = img_src
        self.release_date = release_date
        self.platform = platform
    
    def __str__(self):
        return (f"Title: {self.title}\n"
                f"Image Source: {self.img_src}\n"
                f"Description: {self.desc}\n"
                f"Rating: {self.rating}\n"
                f"Rating Number: {self.rating_num}\n"
                f"Release Date: {self.release_date}\n"
                f"Developer: {self.developer}\n"
                f"Publisher: {self.publisher}\n"
                f"Price: {self.price}\n")

game_list = []
driver = webdriver.Chrome()

driver.get("https://store.steampowered.com")

time.sleep(2)
search = driver.find_element(By.ID, "store_nav_search_term")
search.send_keys("gundam")
search.send_keys(Keys.RETURN)

time.sleep(2)
search_result = driver.find_elements(By.CLASS_NAME, "search_result_row") #search result list
print(len(search_result))

for i in range(len(search_result)):
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
        game = (Game(title, img_src, desc, rating, ratingNum, releaseDate, developer, publisher, price))
        print(game)
    except:pass
    driver.back()
    driver.refresh()
    time.sleep(2)
    search_result = driver.find_elements(By.CLASS_NAME, "search_result_row") #search result list
