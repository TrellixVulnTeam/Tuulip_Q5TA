const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
const fs = require("fs");
const path = require("path");
const request = require("request");
const readline = require("readline");
const crypto = require("crypto");
const client = new Discord.Client();
const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("");

module.exports = class TriviaCommand extends BaseCommand {
  constructor() {
    super('trivia', 'trivia', []);
  }

  async run(client, message, args) {
  }
}