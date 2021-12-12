const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DadjokesCommand extends BaseCommand {
  constructor() {
    super('dadjokes', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('dadjokes command works');
  }
}