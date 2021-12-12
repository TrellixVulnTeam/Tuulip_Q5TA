const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class LoopCommand extends BaseCommand {
  constructor() {
    super('loop', 'music', []);
  }

  run(client, message, args) {
    message.channel.send('loop command works');
  }
}