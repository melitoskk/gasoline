const fs = require('fs')
const jimp = require("jimp");

exports.run = async (client, message, args) => {
        const messages = await message.channel.messages.fetch({ limit: 10 });
        const lastMessage = messages.sort((a, b) => b.createdTimestamp - a.createdTimestamp).filter((m) => m.attachments.size > 0).first();
        args = lastMessage.attachments.first().url

        console.log(args);
        const avatar = await jimp.read(args);
        //resiza pro tamanho do emote
        avatar
            .scaleToFit(50,50)
            
        //escreve o arquivo e envia
        const buffer = await avatar.getBufferAsync(jimp.MIME_PNG)
        fs.writeFileSync('./emote.png', buffer);
        message.channel.send(``, {files: [`./emote.png`]});
}