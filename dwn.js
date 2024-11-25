const puppeteer = require('puppeteer');
const fs = require('fs'); // File system module to write to a file

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
const channels = ['user1','user2','user3'];
//^^^^^ change user1 to chanel name where you want go get id from
(async () => {
  for (const channel of channels) {
    console.log(`Processing channel: ${channel}`);

    // Launch the browser
    const browser = await puppeteer.launch({ headless: true }); // Set headless: true for a non-UI browser
    const page = await browser.newPage();

    try {
      // Navigate to the page
      await page.goto('https://7tv.app'); // Replace with the actual URL
      await delay(2000);
      await page.click('#app > nav > div > button > svg');
      await page.click('#app > nav > div > div.collapse > div.account > div:nth-child(1)');

      // Wait for the input field to appear
      const inputSelector = '#app > nav > div > div.collapse > div.account > main > div > input[type=text]';
      await page.waitForSelector(inputSelector);

      // Input data into the field
      await page.type(inputSelector, channel); // Replace 'Your Input Data' with your actual data
      await delay(2000);

      const firstResultSelector = '#app > nav > div > div.collapse > div.account > main > div.result-tray > a:nth-child(1)';
      await page.waitForSelector(firstResultSelector);

      // Click on the first result
      await page.click(firstResultSelector);

      // Wait for the target element to appear after the last delay
      await delay(3000);
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });

      // Extract the username
      const username = await page.evaluate(() => {
        const mainElement = document.querySelector('main.user-root');
        return mainElement ? mainElement.getAttribute('user') : 'Username not found';
      });

      console.log('Extracted Username:', username);

      // Write the username to a file
      fs.appendFileSync('username.txt', `${username} ${channel}\n`, 'utf8');
      console.log('Username written to file: username.txt');
    } catch (error) {
      console.error(`Error processing channel "${channel}":`, error);
    } finally {
      // Close the browser
      await browser.close();
      console.log(`Finished processing channel: ${channel}`);
    }
  }
})();
