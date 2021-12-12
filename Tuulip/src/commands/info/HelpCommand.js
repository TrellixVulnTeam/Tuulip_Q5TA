const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const db = require("quick.db");

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'info', []);
  }

  async run(client, message, args, guild) {
    var prefix = db.fetch(`${client.prefix} + ${message.guild.id}`);
    if (!prefix) {
      var prefix = "t.";
    }
    const roleColor =
      message.guild.me.displayHexColor === "EA8C8F"
        ? "EA8C8F"
        : message.guild.me.displayHexColor;

    if (!args[0]) {
      let categories = [];
      var commandnum = [];

      let commandscount = "214";

      const embed = new MessageEmbed()
        .setTitle(`🌷 Need help? Here are all of my commands:\n Use \`${prefix}help\` followed by a command name to get more additional information on a command. For example: \`${prefix}help ban\`.`)



        .addField("🌷 **TUULIP'S INFO**", "`dependencies`, `modules`, `servers`, `stats`, `uptime`\n\n**📝 GENERAL INFO**\n`help`, `invite`, `links`, `ping`, `serverstats`, `vote`, **`privacy`**\n\n 🌷 **OWNER**\n`shell`, `control`, `eval`, `usage`\n\n ❔ **GUESSING GAMES**\n `find-words`, `numberguess`, `lovecalc`\n\n :cake: **Birthday Commands**\n `set-birthday`, `check-birthday`\n\n ❌ **ANTI BAD WORDS**\n `antibadwords`")


        .addField("👷‍♂️ **AUTOMOD**", "`anti-alt`, `antilink`, `autonick`, `auto-official-role`, `auto-official-role-disable`, `autorole`, `role-all`\n\n 🌌**MISC**\n`afk`, `animesearch`, `ascii`, `baka`, `beep`, `dumb`, `calc`, `cattext`, `dice`, `eightball`, `flipcoin`, `fliptext`, `joke`, `kill`, `messages`, `poke`, `poll`, `rps`, `sneeze`, `youtube`\n")


        .addField("🎯 **LEVELING**", "`rank`\n\n**💸 ECONOMY**\n`addmoney`, `balance`, `beg`, `bet`, `buy`, `daily`, `deposit`, `monthly`, `pay`, `profile`, `roulette`, `weekly`, `withdraw`, `work`\n\n**📜 LOGS**\n`logs-ticket`, `set-logs`, `remove-logs`\n\n**🎁 GIVEAWAY**\n`edit`, `list`, `end`, `reroll`, `start`,`create`, `cancel`\n\n**🎵 MUSIC**\n`24/7`, `bassboost`, `dc`, `connect`, `lyrics`, `np`, `pause`, `play`, `queue`, `resume`, `shuffle`, `skip`, `stop`, `volume`\n\n**🌷 REPORT**\n`suggest`, `bug-report`\n\n**👋 WELCOME AND LEAVE**\n`leave`, `setwelcome`, `setleave`, `welcome`")





        .addField("📩 **TICKETS**", "`add`, `close`, `delete`, `new`, `open`, `remove`, `setup`\n\n**✅ REACTION ROLES**\n`reaction-role`, `reaction-role-remove`\n\n**🎮 GAMES**\n`csgo`, `poke`, `slots`, `tictactoe`")


        .addField("🔨 **MODERATION**", "`announce`, `ban`, `color`, `hide`, `kick`, `lock`, `maintainence`, `nuke`, `prune`, `purge`, `say`, `sendembed`, `serverlock`, `serverunlock`, `set`, `slowmode`, `stealemoji`, `unban`, `unhide`, `unlock`, `vcid`, `voicedeafen`, `voicekick`, `voicemove`, `voicemute`, `voiceundeaf`, `voiceunmute`, `warn`, `warns`\n**🦉 UTILITY**\n`avatar`, `covid`, `id`, `members`, `roleid`, `servericon`, `serverinfo`, `time`, `info`, `weather`")



        .setFooter(
          `Requested by ${message.author.tag} | Total ${commandscount} Commands`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setColor("EA8C8F");
      message.channel.send(embed)
      let command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Invalid command! Use \`${prefix}help\` for all of my commands! (Some commands will show on help, some might not appear.)`)
          .setColor("EA8C8F");
        return message.channel.send(embed);
      }

      const embeEd = new MessageEmbed()
        .setTitle("Command Details:")
        .addField("PREFIX:", `\`${prefix}\``)
        .addField(
          "COMMAND:",
          command.name ? `\`${command.name}\`` : "No name for this command."
        )
        .addField(
          "ALIASES:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "No aliases for this command."
        )
        .addField(
          "USAGE:",
          command.usage
            ? `\`${prefix}${command.name} ${command.help.usage}}\``
            : `\`${prefix}${command.name}\``
        )
        .addField(
          "DESCRIPTION:",
          command.help.description
            ? command.help.description
            : "No description for this command."
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embeEd);
    }
  }
}
