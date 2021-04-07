const fs = require('fs')
const jimp = require("jimp");

exports.run = async (client, message, args) => {

    if (args.length > 0) {
    //puxa a var da url do index
    const avatar = await jimp.read(args[0]);
    //resiza pro tamanho do emote
    //escreve o arquivo e envia
    const buffer = await avatar.getBufferAsync(jimp.MIME_PNG)
    fs.writeFileSync('./emote.gif', buffer);
    message.channel.send(``, {files: [`./emote.gif`]});
    }else {
        const messages = await message.channel.messages.fetch({ limit: 10 });
        const lastMessage = messages.sort((a, b) => b.createdTimestamp - a.createdTimestamp).filter((m) => m.attachments.size > 0).first();
        args = lastMessage.attachments.first().url

        console.log(args);
        const avatar = await jimp.read(args);
        //resiza pro tamanho do emote
        //escreve o arquivo e envia
        const buffer = await avatar.getBufferAsync(jimp.MIME_PNG)
        fs.writeFileSync('./emote.gif', buffer);
        message.channel.send(``, {files: [`./emote.gif`]});
    }
}