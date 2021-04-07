const { MessageEmbed } = require("discord.js")

const scriptbom = require(`../index.js`);
exports.run = async (client, message, args, Discord) => {
    message.channel.send(scriptbom.embedhelp)
}