from selenium import webdriver
from selenium.webdriver.common.by  import By
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()

driver.get("https://store.steampowered.com/category/anime")

search = driver.find_element(By.ID, "store_nav_search_term")
search.send_keys("gundam")
search.send_keys(Keys.RETURN)
time.sleep(10)

driver.close()
print(driver.title)
driver.quit()
