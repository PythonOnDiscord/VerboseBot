// Ugh, sick of those people who just come in your server and start
// User: ~/?!
// Well look no further than Verbose.

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

client.on('messageCreate', async (message) => {
  if (message.content.includes('bad word')) {
    message.delete();
    if (!message.deleted) {
      const userMention = message.author.toString();
      const replyMessage = `Please refrain from using inappropriate language. | This message is dedicated for ${userMention}`;
      await message.channel.send(replyMessage);
    }
  }
});

// Need multiple swear words? 

// Copy and paste this, but change the swear, 

client.on('messageCreate', async (message) => {
  if (message.content.includes('Different  Swear  Here')) {
    message.delete();
    if (!message.deleted) {
      const userMention = message.author.toString();
      const replyMessage = `Please refrain from using inappropriate language. | This message is dedicated for ${userMention}`;
      await message.channel.send(replyMessage);
    }
  }
});

// Replace 'your-bot-token' with your bot's token
client.login('your-bot-token');
