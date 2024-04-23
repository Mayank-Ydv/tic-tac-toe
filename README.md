from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
# from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Function to schedule a new Zoom meeting and start screen sharing
def test_zoom():
    # Set up Chrome WebDriver (you can use another browser by changing this line)
    driver = webdriver.Chrome()

    try:
        # Open Zoom website
        driver.get("https://zoom.us/")

        # Sign in (Replace placeholders with your credentials)
        sign_in_button = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//a[contains(text(),'Sign In')]")))
        sign_in_button.click()

        # Enter email
        email_input = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "email")))
        email_input.send_keys("ymayank832@gmail.com")
        email_input.send_keys(Keys.RETURN)

        # Enter password
        password_input = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, "password")))
        password_input.send_keys("y052842004@M")
        password_input.send_keys(Keys.RETURN)

        # Start a new meeting
        start_meeting_button = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.CLASS_NAME, "_meeting-icon_4f3t3_10")))
        start_meeting_button.click()

        # Switch to the new window
        WebDriverWait(driver, 10).until(EC.number_of_windows_to_be(2))
        windows = driver.window_handles
        driver.switch_to.window(windows[1])

         # enter meeting name
        meeting_name_input = WebDriverWait(driver, 70).until(EC.presence_of_element_located((By.CLASS_NAME, "zm-input__inner")))
        meeting_name_input.send_keys("software testing")
        meeting_name_input.send_keys(Keys.RETURN)

        # Wait for the save button in the new window
        save_meeting_button = WebDriverWait(driver, 50).until(EC.presence_of_element_located((By.CLASS_NAME, "zm-button--small")))
        save_meeting_button.click()

        time.sleep(40)  # Adjust this delay as needed

    finally:
        # Close the browser
        driver.quit()
        print("Test cases completed successfully.")

# Run the test
test_zoom()





## code for e-cart
import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

class TestAddToCart(unittest.TestCase):

    def test_add_to_cart_after_login(self):
        # Set up Chrome WebDriver
        driver = webdriver.Chrome()

        # Navigate to the login page
        driver.get("https://m.snapdeal.com/signin")

        # Enter user name
        username_input = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "userInputBox"))
        )
        username_input.send_keys("9918050815")

        # Click login button
        next_button = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "btn"))
        )
        next_button.click()

        # Manually enter OTP
        otp = input("Please enter the OTP received on your registered mobile number: ")
        otp_input = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "verifyInput"))
        )
        otp_input.send_keys(otp)

        # Perform the search for the item
        driver.get("https://www.snapdeal.com/")
        search_input = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "inputValEnter"))
        )
        search_input.send_keys("Bentag Exerciser Single Spring Tummy Trimmer")

        search_button = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "searchTextSpan"))
        )
        search_button.click()

        # Add the item to cart
        driver.get("https://www.snapdeal.com/product/bentag-exerciser-single-spring-tummy/649577200211")
        add_to_cart_button = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "add-cart-button-id"))
        )
        add_to_cart_button.click()

        # Verify that the item is in the cart
        element_xpath = "//a[@href='https://www.snapdeal.com/product/bentag-exerciser-single-spring-tummy/649577200211']"
        added_item = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, element_xpath))
        )
        self.assertTrue(added_item.is_displayed(), "Item not found in cart")

        # Close the browser
        driver.quit()
        print("Test cases completed successfully.")

if __name__ == "__main__":
    unittest.main()
