const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class TicketCommand extends BaseCommand {
  constructor() {
    super('ticket', 'ticket', []);
  }

  async run(client, message, args) {
    message.channel.send('ticket command works');
  }
}