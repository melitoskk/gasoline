const { Image } = require('canvas')
const scriptbom = require(`../index.js`);
exports.run = async (client, message, args) => {

    if (args.length > 0) {
        console.log("aoia")
        const url = args[0]
            .replace ("cdn","media")
            .replace (".com",".net")
        message.channel.send(url + "?width=50&height=50");
    
}else {
    const messages = await message.channel.messages.fetch({ limit: 10 });
    const lastMessage = messages.sort((a, b) => b.createdTimestamp - a.createdTimestamp).filter((m) => m.attachments.size > 0).first();
    args = lastMessage.attachments.first().url

        console.log("aoia")
        const url = args
            .replace ("cdn","media")
            .replace (".com",".net")
        message.channel.send(url + "?width=50&height=50");
    
}

}