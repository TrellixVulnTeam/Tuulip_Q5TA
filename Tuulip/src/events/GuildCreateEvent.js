// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildCreate
const BaseEvent = require('../utils/structures/BaseEvent');
const Discord = require('discord.js');
module.exports = class GuildCreateEvent extends BaseEvent {
  constructor() {
    super('guildCreate');
  }

  async run(client, guild) {
    let channelToSend;

    guild.channels.cache.forEach((channel) => {
      if (
        channel.type === "text" &&
        !channelToSend &&
        channel.permissionsFor(guild.me).has("SEND_MESSAGES")
      )
        channelToSend = channel;

    });

    if (!channelToSend) return;

    channelToSend.send(
      new Discord.MessageEmbed()
        .setAuthor(guild.name, guild.iconURL({ dynamic: true }))
        .setDescription(
          "**Thank you for inviting me to your server!** My default prefix is `t.`! 🌷"
        )
        .setColor("#EA8C8F")
        .setTimestamp()
    );
  }
};