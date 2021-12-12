const {  MessageEmbed } = require("discord.js");

module.exports = {
 async  attentionembed(message, title) {

    try{
      await message.reactions.removeAll();
       await message.react("❌");
      }catch{
        }

    let resultsEmbed = new MessageEmbed()
      .setTitle("❌ | " + title)
      .setColor("#EA8C8F")
      
      message.channel.send(resultsEmbed);
    return;

  }
};