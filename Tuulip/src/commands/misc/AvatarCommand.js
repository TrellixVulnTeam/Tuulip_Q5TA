const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js')

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('avatar', 'misc', []);
  }

  async run(client, message, args) {
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!user) user = message.member;

    let embed = new MessageEmbed()
      .setAuthor(`${user.user.tag}`, user.user.displayAvatarURL({ size: 2048 }))
      .setImage(user.user.displayAvatarURL())
      .setColor("#EA8C8F")
    message.channel.send(embed)
  }
}