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

game_list = []
driver = webdriver.Chrome()

driver.get("https://store.steampowered.com/category/anime")

search = driver.find_element(By.ID, "store_nav_search_term")
search.send_keys("stardew valley")
search.send_keys(Keys.RETURN)
time.sleep(3)
img_list = driver.find_elements(By.CLASS_NAME, "search_capsule")
game_banner = driver.find_elements(By.CLASS_NAME, "responsive_search_name_combined")
title_list = driver.find_elements(By.CLASS_NAME, "title")
released_list = driver.find_elements(By.CLASS_NAME, "search_released")
price_list = driver.find_elements(By.CLASS_NAME, "discount_final_price")

for i in range(5):
    platforms = []
    img_element = img_list[i].find_element(By.TAG_NAME, "img")
    title_element = game_banner[i].find_element(By.CLASS_NAME, "title").text
    released_element = game_banner[i].find_element(By.CLASS_NAME, "search_released").text
    try:
        price_element = game_banner[i].find_element(By.CLASS_NAME, "discount_final_price").text
    except:
        price_element = "to be announced"
    platform_elements = game_banner[i].find_elements(By.CSS_SELECTOR, "span[class^='platform_img']")
    for platform_element in platform_elements:
        platforms.append(platform_element.get_attribute("class").split(" ")[1])
    
    new_game = Game(title = title_element, price = price_element, img_src= img_element.get_attribute("src"), release_date= released_element, platform=platforms)
    game_list.append(new_game)

for game in game_list:
    print("Title: %s" % game.title)
    print("Price: %s" % game.price)
    print("Image Source: %s" % game.img_src)
    print("Release Date: %s" % game.release_date)
    print("Platforms: %s" % ", ".join(game.platform))
    print("---")

#driver.close()
print(driver.title)
#driver.quit()
