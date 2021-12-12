const BaseCommand = require('../../utils/structures/BaseCommand');
const fetch = require("node-fetch")
const Discord = require("discord.js")
const link = 'https://www.reddit.com/r/animememes.json?sort=top&t=week'

module.exports = class AnimemCommand extends BaseCommand {
  constructor() {
    super('animem', 'misc', []);
  }

  async run(client, message, args) {
    let fetchMemes = await fetch(link).then(m => m.json())
    const getMemes = fetchMemes.data.children;
    let randomMeme = getMemes[Math.floor(Math.random() * getMemes.length)]
    let memeEmbed = new Discord.MessageEmbed()
      .setTitle(randomMeme.data.title)
      .setImage(randomMeme.data.url)
      .setColor("#ea8c8f");
    message.channel.send(memeEmbed)
  }
}
