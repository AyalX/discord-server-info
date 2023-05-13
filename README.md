# Discord Server Details Fetcher Script

This script allows you to fetch the details of a Discord server using the Discord web client developer console. It uses the user's Discord API to fetch the server details and then extracts the relevant information.

## Features

- Fetches details about a Discord server such as:
  - Server ID
  - Server Name
  - Server Owner ID
  - Server Icon URL
  - Server Description
  - Server Region
  - AFK Channel ID
  - AFK Timeout
  - Verification Level
  - Default Message Notifications
  - Explicit Content Filter
  - Roles (with their name, ID, position, and permissions)
  - Visible Channels (with their name, ID, type, topic, and position)
- Generates a text file with the fetched server details and automatically downloads it.

## Usage

1. Navigate to the Discord web client in your browser.
2. Open the developer console in your browser. You can usually do this by right-clicking anywhere on the page, selecting "Inspect" or "Inspect Element," and then clicking on the "Console" tab.
3. Ensure you're on the Discord server for which you want to fetch the details.
4. Copy the entire script and paste it into the developer console.
5. Hit Enter to run the script.
6. When prompted, enter your Discord token. This can be found in the local storage of the Discord web client. (Navigate to the "Application" tab in the developer console, expand the "Local Storage" section, and look for an entry with the key "token".)
7. The script will fetch the server details and automatically download a text file with the name `Server_Details_{SERVER_NAME}.txt`, where `{SERVER_NAME}` is the name of the Discord server.

## Warning
Be aware that your Discord token is sensitive information. Do not share it with anyone. Keep it secret, keep it safe!

## Disclaimer
This script is provided for educational purposes only. Please use it responsibly. Any misuse of this script and its consequences are solely the user's responsibility. The author does not take any responsibility for any misuse of this script.

## License
This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) License](LICENSE.md).

## Author
- [@AyalX](https://github.com/AyalX) on GitHub.

## Contributions
Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/AyalX/discord-server-info/issues) if you want to contribute.

## Show your support
Give a ⭐️ if this project helped you!
