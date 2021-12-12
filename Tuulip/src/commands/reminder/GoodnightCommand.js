const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class GoodnightCommand extends BaseCommand {
  constructor() {
    super('goodnight', 'reminder', []);
  }

  async run(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Goodnight. 🌷')
      .setDescription(`Goodnight from over here, ${message.author}. I wish you the best of dreams. My hope is that when you wake up, you'll feel refreshed and ready to rock the day! I have a tulip for you, esteemed sir/miss/mx 🌷! As you take in the sweet floral aroma, your eyelids begin to feel heavy as you drift into an entrancing sleep.`)
      .setTimestamp()
      .setColor('#ea8c8f')
    message.channel.send(embed);
  }
}