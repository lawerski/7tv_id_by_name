Channel Username Extractor
This project uses Puppeteer, a Node.js library for browser automation, to search for a list of channel names on 7tv.app and extract their usernames. The channels are processed sequentially, and the usernames are saved to a text file.

Requirements
Node.js (version 14 or newer recommended)
Puppeteer for automating browser actions
File System (fs) to save extracted usernames to a file
Installation
Clone the repository or create a new directory for your project:

bash
git clone https://github.com/your-username/channel-username-extractor.git
cd channel-username-extractor
Install dependencies:

You need to install Puppeteer to use the script:

bash
npm install puppeteer
How to Use
Update the channels list: Open the script file and modify the channels array with the names of the channels you want to search for.

Run the script:

In the terminal, run the following command to start the process:

bash
node index.js
The script will open a browser (non-headless mode by default), search for each channel on 7tv.app, extract the usernames, and save them to a file called username.txt.
If the script encounters an error for any channel, it will move on to the next one without stopping.
Check the output: After the script finishes, you will find a username.txt file in your project directory. This file will contain the extracted usernames, one per line.

Example Output
After running the script, the username.txt file will look like this:

txt
username1
username2
username3
...
Each channel's username is written on a new line.

How It Works
Launches Puppeteer: The script opens a browser window (non-headless) and navigates to 7tv.app.
Searches for Channels: It types the channel names from the channels array into the search field on the website.
Extracts the Username: After the search results load, the script extracts the username from the page.
Saves the Username: The extracted username is written to a file called username.txt.
Repeats the Process: The script repeats the process for each channel in the list.
Troubleshooting
Error: "channel is not a function":

Ensure that the channels array is correctly defined as an array of strings.
Double-check that there are no syntax errors in your code.
If Puppeteer fails to launch or the page doesn't load:

Make sure you're using a supported version of Node.js.
You can try running Puppeteer in headless mode (headless: true) if the browser UI is causing issues.
License
This project is open source and available under the MIT License.

