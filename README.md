##code 1##

from selenium import webdriver##
from selenium.webdriver.common.keys import Keys##
from selenium.webdriver.common.by import By##
from selenium.webdriver.common.action_chains import ActionChains##
from selenium.webdriver.support.ui import WebDriverWait##
from selenium.webdriver.support import expected_conditions as EC##
import time##

##Function to schedule a new Zoom meeting and start screen sharing##
def test_zoom():##
    ## Set up Chrome WebDriver (you can use another browser by changing this line)##
    driver = webdriver.Chrome()##

    try:
        # Open Zoom website
        driver.get("https://zoom.us/")

        # Sign in (Replace placeholders with your credentials)
        sign_in_button = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//a[contains(text(),'Sign In')]")))
        sign_in_button.click()

        # Enter email
        email_input = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "email")))
        email_input.send_keys("example.com")
        email_input.send_keys(Keys.RETURN)

        # Enter password
        password_input = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, "password")))
        password_input.send_keys("example")
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
test_zoom()##





## code 2
import unittest##
from selenium import webdriver##
from selenium.webdriver.common.by import By##
from selenium.webdriver.support.ui import WebDriverWait##
from selenium.webdriver.support import expected_conditions as EC##
import time##

class TestAddToCart(unittest.TestCase):##

    def test_add_to_cart_after_login(self):
        # Set up Chrome WebDriver
        driver = webdriver.Chrome()

        # Navigate to the login page
        driver.get("https://m.snapdeal.com/signin")

        # Enter user name
        username_input = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "userInputBox"))
        )
        username_input.send_keys("675685875")

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

if __name__ == "__main__":##
    unittest.main()##



##code 3
import pytest##
from selenium import webdriver##
from selenium.webdriver.common.by import By##
from selenium.webdriver.support.ui import WebDriverWait##
from selenium.webdriver.support import expected_conditions as EC##
import time##

class TestWynkMusicTest():##
    def setup_method(self, method):##
        self.driver = webdriver.Chrome()##
        self.driver.maximize_window()  # Maximize the browser window##
        self.wait = WebDriverWait(self.driver, 10)  # Use WebDriverWait for better element waiting##

    def teardown_method(self, method):
        self.driver.quit()

    def test_wynk_music(self):
        self.driver.get("https://wynk.in/music")

        # Click on the sign in button
        sign_in_button = self.wait.until(EC.element_to_be_clickable(("xpath", "/html/body/div[1]/header/section[1]/div[2]/span/div")))
        sign_in_button.click()

        # Enter phone number
        phone_input = self.wait.until(EC.element_to_be_clickable(("xpath", "/html/body/div[3]/div/div/div/div/div[2]/div/div[2]/div[2]/form/div[1]/input")))
        phone_input.send_keys("6457686887")  # Replace with your phone number

        # Click on the continue button
        continue_button = self.driver.find_element("xpath", "/html/body/div[3]/div/div/div/div/div[2]/div/div[2]/div[2]/form/div[2]/button[2]")
        continue_button.click()

        # Wait for OTP input field to be visible
        otp_input = self.wait.until(EC.visibility_of_element_located(("xpath", "/html/body/div[3]/div/div/div/div/div[2]/div/div[2]/div[2]/form/div[1]/input")))

        # Enter OTP
        otp_input.send_keys("")  # Replace with your OTP

        # Click on the submit button
        submit_button = self.driver.find_element("xpath", "/html/body/div[3]/div/div/div/div/div[2]/div/div[2]/div[2]/form/div[2]/button")
        submit_button.click()

        # Wait for login to complete (you may need to add more explicit waits depending on the actual login flow)
        time.sleep(15)

        # Now you should be logged in and can proceed with your test steps
        # For example, you can search for a song and click on it
        search_box = self.wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".placeholder-elipsis")))
        search_box.click()
        search_input = self.driver.find_element(By.CSS_SELECTOR, ".dark\\3Aplaceholder\\3Atext-wynk-gray1")
        search_input.send_keys("one love")
        first_result = self.wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".flex:nth-child(4) .text-left:nth-child(1)")))
        first_result.click()

        time.sleep(30)
        # Continue with the rest of your test steps
