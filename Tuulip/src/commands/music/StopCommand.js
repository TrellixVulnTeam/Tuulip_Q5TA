const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class StopCommand extends BaseCommand {
  constructor() {
    super('stop', 'music', []);
  }

  run(client, message, args) {
    message.channel.send('stop command works');
  }
}