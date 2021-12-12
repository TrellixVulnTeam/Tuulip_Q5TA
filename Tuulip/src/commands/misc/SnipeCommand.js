const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class SnipeCommand extends BaseCommand {
  constructor() {
    super('snipe', 'misc', []);
  }

  async run(client, message, args) {
    const msg = client.snipes.get(message.channel.id);
    if (!msg) return message.channel.send('There is nothing to snipe!');

    const snipeEmbed = new Discord.MessageEmbed()
      .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true }))
      .addField('Content:', msg.content)
      .addField('Author:', `<@${msg.author.id}>`)
      .setColor("#EA8C8F")
      .setTimestamp()
    message.channel.send(snipeEmbed);
  }
}