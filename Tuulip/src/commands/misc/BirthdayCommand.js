const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
const db = require("quick.db");

module.exports = class BirthdayCommand extends BaseCommand {
  constructor() {
    super('birthday', 'misc', []);
  }

  async run(client, message, args) {
    const months = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    };
    if (message.mentions.users.first()) {
      return message.channel.send("You can only set a birthday of yours, not someone else!");
    }
    const joined = args.join(" ");
    const split = joined.trim().split("/");

    let [day, month] = split;

    if (!day) return message.reply('Please specify a date! **Ex:** t.birthday 6/11');
    if (!month) return message.reply('Please specify a month! **Ex:** t.birthday 6/11');

    if (isNaN(day) || isNaN(month))
      return message.reply('Please specify a valid number! **Ex:** t.birthday 5/12');

    day = parseInt(day);
    month = parseInt(month);

    if (!day || day > 31) return message.reply('Please specify a date within 31! **Ex:** t.birthday 5/12');
    if (!month || month > 12) return message.reply('Please specify a month within 12! **Ex:** t.birthday 5/12');
    const convertedDay = suffixes(day);
    const convertedMonth = months[month];
    const BirthdayString = `${convertedDay} of ${convertedMonth}`;
    db.set(`birthdate_${message.author.id}`, BirthdayString);
    message.reply(`🌷 ${BirthdayString} has been set as your bithday!`)
  }
}
/**
 * 
 * @param {Number} number 
 */
function suffixes(number) {
  const converted = number.toString();

  const lastChar = converted.charAt(converted.length - 1);

  return lastChar == "1"
    ? `${converted}st`
    : lastChar == "2" 
    ? `${converted}nd`
    : lastChar == '3'
    ? `${converted}rd`
    : `${converted}th`;
}
