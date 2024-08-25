from selenium import webdriver
from selenium.webdriver.common.by  import By
from selenium.webdriver.common.keys import Keys
import time

class Game:
    def __init__(self, title, price, img_src, release_date):
        self.title = title
        self.price = price
        self.img_src = img_src
        self.release_date = release_date

game_list = []
driver = webdriver.Chrome()

driver.get("https://store.steampowered.com/category/anime")

search = driver.find_element(By.ID, "store_nav_search_term")
search.send_keys("gundam")
search.send_keys(Keys.RETURN)
img_list = driver.find_elements(By.CLASS_NAME, "search_capsule")
title_list = driver.find_elements(By.CLASS_NAME, "title")
released_list = driver.find_elements(By.CLASS_NAME, "search_released")
price_list = driver.find_elements(By.CLASS_NAME, "discount_final_price")
print(price_list)
print(released_list)
print(title_list)
#for i in range (len(img_list)):
 #   img_element = img_list[i].find_element(By.TAG_NAME, "img")
  #  title_element = title_list[i]
   # released_date_element = released_list[i]
    #price_element = price_list[i]
    
    
   # new_game = Game(title=title_element, price = price_element, img_src= img_element.get_attribute("src"), release_date=released_date_element)
    

time.sleep(10)

#driver.close()
print(driver.title)
#driver.quit()
