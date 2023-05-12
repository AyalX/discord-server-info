# Discord Server Details Fetcher Script

This script allows a user to fetch the details of a Discord server using the Discord web client developer console. It uses the Discord API of the user to fetch the server details and then extracts the relevant information.

## Information

- This script is provided for educational purposes only. Use it responsibly and at your own risk.
- The script requires a valid Discord token to fetch the server details. The token can be obtained from the local storage of the Discord web client by following the instructions provided above.
- The script uses the Discord API to fetch server details, and it relies on the current structure of the Discord web client. Any changes to the Discord web client or API may break the functionality of this script.
- The fetched information about a Discord server includes:
  - Server ID
  - Server Name
  - Server Owner ID
  - Server Icon URL
  - Server Description
  - Server Region
  - AFK Channel ID
  - AFK Timeout (in seconds)
  - Verification Level
  - Default Message Notifications
  - Explicit Content Filter
  - Roles (Name, ID, Position, Permissions)
  - Visible Channels (Name, ID, Type, Topic, Position)

## Usage

1. Visit the Discord web client in your browser.
2. Open the developer console in your browser.
   - On most browsers, you can right-click on the Discord page, select "Inspect" or "Inspect Element," and then navigate to the "Console" tab.
3. Copy the entire script and paste it into the developer console.
4. Press Enter to run the script.
5. The script will prompt you to enter your Discord token. You can retrieve your token by following these steps:
   - In the developer console, navigate to the "Application" tab (in some browsers, it may be called "Storage" or "Resources").
   - Expand the "Local Storage" section.
   - Look for an entry with the key "token". This entry stores your Discord token.
   - Copy the token and paste it into the prompt in the developer console where the script is running.
   - **Note**: Make sure to keep your Discord token private and do not share it with anyone.
6. The script will fetch the server details using the Discord API and generate a text file containing the server information.
7. The text file will be automatically downloaded with the name `Server_Details_{SERVER_NAME}.txt`, where `{SERVER_NAME}` is the name of the Discord server.
8. Open the downloaded text file to view the server details.

## Disclaimer

- This script is provided for educational purposes only. The author does not take any responsibility for how you use this script or any consequences that may arise from its usage.
- By using this script, you acknowledge that you are responsible for your actions and comply with the Discord Terms of Service and API usage guidelines.

## License

This script is released under the If you don't want to allow selling copies or commercial usage of your script, you can consider using the Creative Commons Attribution-NonCommercial (CC BY-NC) license. This license allows others to share and adapt your work, but only for non-commercial purposes.

Here's an updated license section for your README:

## License

This script is released under the [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) License](LICENSE.md).
