This project uses Puppeteer to automatically search for a list of channels on 7tv.app and extract their usernames. Each channel is processed sequentially, and the usernames are written to a text file.

Requirements
Node.js (v14 or newer recommended)
Puppeteer for browser automation
File System (fs) to write the extracted usernames to a file
Installation
Clone the repository or create a new directory for the project:

bash
Skopiuj kod
git clone https://github.com/your-username/channel-username-extractor.git
cd channel-username-extractor
Install dependencies:

You need to install Puppeteer for this script to work:

bash
Skopiuj kod
npm install puppeteer
How to Use
Prepare the channels list: Edit the channels array in the script to include the names of the channels you want to search for.

Run the script:

bash
Skopiuj kod
node index.js
This will open a browser window (non-headless), search each channel on 7tv.app, extract the username, and save the results to username.txt.
If there is an error in processing a particular channel, it will skip to the next one.
View the Results: The script appends the extracted usernames to a username.txt file in the project directory.

Example Output
After the script has run, you'll have a username.txt file with the extracted usernames of the channels.

txt
Skopiuj kod
username1
username2
username3
...
How It Works
Launches Puppeteer Browser: The script opens a browser window and navigates to 7tv.app.
Searches for Each Channel: It enters the channel name into the search field.
Extracts the Username: Once the page is loaded, it extracts the username from the page.
Writes to File: The username is written to username.txt.
Continues for All Channels: The process repeats for each channel in the list.
Troubleshooting
"Error: channel is not a function":

Ensure that your channels array is correctly formatted as an array of strings.
Make sure there are no syntax errors in your code.
If Puppeteer fails to launch or the page doesn't load:

Ensure you're using a supported version of Node.js.
Try running with headless: true to avoid opening the browser UI.
License
This project is open source and available under the MIT License.