// ==UserScript==
// @name         Discord Server Details Fetcher Script
// @namespace    discord-server-info
// @version      1
// @description  This script allows a user to fetch the details of a Discord server using the Discord web client developer console. It uses the Discord API of the user to fetch the server details and then extracts the relevant information.
// @author       @AyalX on github.com
// @match        https://discord.com/*
// @grant        none
// ==/UserScript==

// Discord API endpoint for fetching server details
const SERVER_API_URL = 'https://discord.com/api/v9/guilds/';

// Get the server ID from the current URL
const getServerId = () => window.location.pathname.split('/')[2];

(async () => {
    try {
        const discordToken = prompt("Please enter your Discord token:");

        // Fetch server details from Discord API
        const serverDetails = await fetch(SERVER_API_URL + getServerId(), {
            headers: {
                authorization: discordToken
            }
        }).then(res => res.json());

        // Extract server details
        const { id, name, owner_id, icon, description, region, afk_channel_id, afk_timeout, verification_level, default_message_notifications, explicit_content_filter, roles } = serverDetails;

		// Function to convert permission number to string
		function getPermissionString(permissionNumber) {
		const permissions = {
		CREATE_INSTANT_INVITE: BigInt(0x0000000001),
		KICK_MEMBERS: BigInt(0x0000000002),
		BAN_MEMBERS: BigInt(0x0000000004),
		ADMINISTRATOR: BigInt(0x0000000008),
		MANAGE_CHANNELS: BigInt(0x0000000010),
		MANAGE_GUILD: BigInt(0x0000000020),
		ADD_REACTIONS: BigInt(0x0000000040),
		VIEW_AUDIT_LOG: BigInt(0x0000000080),
		PRIORITY_SPEAKER: BigInt(0x0000000100),
		STREAM: BigInt(0x0000000200),
		VIEW_CHANNEL: BigInt(0x0000000400),
		SEND_MESSAGES: BigInt(0x0000000800),
		SEND_TTS_MESSAGES: BigInt(0x0000001000),
		MANAGE_MESSAGES: BigInt(0x0000002000),
		EMBED_LINKS: BigInt(0x0000004000),
		ATTACH_FILES: BigInt(0x0000008000),
		READ_MESSAGE_HISTORY: BigInt(0x0000010000),
		MENTION_EVERYONE: BigInt(0x0000020000),
		USE_EXTERNAL_EMOJIS: BigInt(0x0000040000),
		VIEW_GUILD_INSIGHTS: BigInt(0x0000080000),
		CONNECT: BigInt(0x0000100000),
		SPEAK: BigInt(0x0000200000),
		MUTE_MEMBERS: BigInt(0x0000400000),
		DEAFEN_MEMBERS: BigInt(0x0000800000),
		MOVE_MEMBERS: BigInt(0x0001000000),
		USE_VAD: BigInt(0x0002000000),
		CHANGE_NICKNAME: BigInt(0x0004000000),
		MANAGE_NICKNAMES: BigInt(0x0008000000),
		MANAGE_ROLES: BigInt(0x0010000000),
		MANAGE_WEBHOOKS: BigInt(0x0020000000),
		MANAGE_EMOJIS_AND_STICKERS: BigInt(0x0040000000),
		USE_APPLICATION_COMMANDS: BigInt(0x0080000000),
		REQUEST_TO_SPEAK: BigInt(0x0100000000),
		MANAGE_THREADS: BigInt(0x0400000000),
		CREATE_PUBLIC_THREADS: BigInt(0x0800000000),
		CREATE_PRIVATE_THREADS: BigInt(0x1000000000),
		USE_EXTERNAL_STICKERS: BigInt(0x2000000000),
		};
		const permissionStrings = [];
		for (const [permissionName, permissionValue] of Object.entries(permissions)) {
		if ((BigInt(permissionNumber) & permissionValue) === permissionValue) {
		permissionStrings.push(permissionName);
		}
		}
		return permissionStrings.join(", ");
		}

        // Fetch channel details from Discord API
        const CHANNEL_API_URL = 'https://discord.com/api/v9/guilds/' + id + '/channels';
        const channelDetails = await fetch(CHANNEL_API_URL, {
            headers: {
                authorization: discordToken
            }
        }).then(res => res.json());

        const visibleChannels = channelDetails.filter(channel => channel.type !== 4 && channel.type !== 6);

        // Function to generate server details content
        function generateServerDetailsContent() {
            let content = '';

            content += `Server ID: ${id}\n`;
            content += `Server Name: ${name}\n`;
            content += `Server Owner ID: ${owner_id}\n`;
            content += `Server Icon URL: https://cdn.discordapp.com/icons/${id}/${icon}.png\n`;
            content += `Server Description: ${description}\n`;
            content += `Server Region: ${region}\n`;
            content += `AFK Channel ID: ${afk_channel_id}\n`;
            content += `AFK Timeout (in seconds): ${afk_timeout}\n`;
            content += `Verification Level: ${verification_level}\n`;
            content += `Default Message Notifications: ${default_message_notifications}\n`;
            content += `Explicit Content Filter: ${explicit_content_filter}\n`;

            // Print roles details
            content += `\n--- Roles ---\n`;
            roles.sort((a, b) => a.position - b.position).forEach((role) => {
                content += `Role: ${role.name} (ID: ${role.id})\n`;
                content += `  Position: ${role.position}\n`;
                content += `  Permissions: ${getPermissionString(role.permissions)}\n`;
            });

            // Print visible channel details
            content += `\n--- Channels ---\n`;
            visibleChannels.sort((a, b) => a.position - b.position).forEach(channel => {
                const channelType = channel.type === 0 ? "Text" : channel.type === 2 ? "Voice" : "Unknown";
                content += `#${channel.name} (ID: ${channel.id})\n`;
                content += `  Type: ${channelType}\n`;
                content += `  Topic: ${channel.topic}\n`;
                content += `  Position: ${channel.position}\n`;
            });

            return content;
        }

        // Function to download server details as a text file
        function downloadServerDetails() {
            const content = generateServerDetailsContent();
            const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Server_Details_${name}.txt`;
            a.click();
            URL.revokeObjectURL(url);
        }

        // Download server details as a text file
        downloadServerDetails();

    } catch (error) {
        console.error('Error fetching server details:', error);
    }
})();
