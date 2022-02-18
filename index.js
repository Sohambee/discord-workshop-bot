const Discord = require('discord.js') //Discord.JS library
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }) // Client to connect to
const { TOKEN } = require ('./token')

client.on("ready", () => { //On client connection to Discord server
  console.log(`Connected as ${client.user.tag}!`); //Log connnected as + client name
})

client.on("message", msg => { //On message receive in channel
  if (msg.content === 'ping') { //Check content of message, if == ping, reply with pong
    msg.reply("pong");
  }
})

client.login(TOKEN) //Setting your TOKEN for client login