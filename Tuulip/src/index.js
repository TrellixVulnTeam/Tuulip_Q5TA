
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const { Client } = require('discord.js');
const mongoose = require('mongoose');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const client = new Client();
client.snipes = new Map();

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);
})();

mongoose.connect('mongodb+srv://caye:FilioRamakis@tuulip.crg13.mongodb.net/Data', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(console.log('Tuulip has connected to the database~ 🌷'))

// Requires Manager from discord-giveaways
const { GiveawaysManager } = require('discord-giveaways');
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
  storage: './config.json',
  updateCountdownEvery: 10000,
  hasGuildMembersIntent: false,
  default: {
    botsCanWin: false,
    exemptPermissions: ['MANAGE_MESSAGES', 'ADMINISTRATOR'],
    embedColor: 'EA8C8F',
    reaction: '🎉'
  }
});
// We now have a giveawaysManager property to access the manager everywhere!
client.giveawaysManager = manager;

/* Load all commands */
client.commands = new Discord.Collection();

const {readdirSync} = require('fs');
const ascii = require('ascii-table')
let table = new ascii("Commands");
const db  = require("quick.db")
table.setHeading('Command', ' Load status');
module.exports= (client) => {
    readdirSync('./commands/').forEach(dir => {
    
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
        for(let file of commands){
            let pull = require(`../commands/${dir}/${file}`);
           
            if(pull.name){
                client.commands.set(pull.name, pull);
                table.addRow(file,'✅')
            } else {
                table.addRow(file, '❌ -> Missing a help.name, or help.name is not a string.')
                continue;
            }if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))
        }
    });
    console.log(table.toString());
}
