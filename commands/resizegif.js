const { Image } = require('canvas')
const scriptbom = require(`../index.js`);
exports.run = async (client, message, args) => {

    if (args.length > 0) {
    if (args[0].includes(".gif")){
        console.log("aoia")
        var width = ''
        var height = ''
        var proporcao = ''
        //puxa a var da url do index
        const scriptbom = require(`../index.js`);
        //altera o link pra poder botar parametro
        const url = args[0]
            .replace ("cdn","media")
            .replace (".com",".net")
        const img = new Image();
        img.onload = function() {
            //carrega foto, pega proporcao e seta o tamanho certinho de emote
            if (img.width > img.height) {
                proporcao = img.height/img.width
                width = 50
                height = Math.round(50*proporcao)
            }
            if (img.width < img.height) {
                proporcao = img.width/img.height
                width = Math.round(50*proporcao)
                height = 50
            }
            if (img.width == img.height) {
                proporcao = 1
                width = 50
                height = 50
            }
            message.channel.send(url + "?width=" + width + "&height=" + height);
        }
        img.src = url;
    }
}else {
    console.log('procura ai po')
    const messages = await message.channel.messages.fetch({ limit: 10 });
    const lastMessage = messages.sort((a, b) => b.createdTimestamp - a.createdTimestamp).filter((m) => m.attachments.size > 0).first();
    args = lastMessage.attachments.first().url
    console.log(args)

    if (args.includes(".gif")){
        console.log("aoia")
        var width = ''
        var height = ''
        var proporcao = ''
        //puxa a var da url do index
        const scriptbom = require(`../index.js`);
        //altera o link pra poder botar parametro
        const url = args
            .replace ("cdn","media")
            .replace (".com",".net")
        const img = new Image();
        img.onload = function() {
            //carrega foto, pega proporcao e seta o tamanho certinho de emote
            if (img.width > img.height) {
                proporcao = img.height/img.width
                width = 50
                height = Math.round(50*proporcao)
            }
            if (img.width < img.height) {
                proporcao = img.width/img.height
                width = Math.round(50*proporcao)
                height = 50
            }
            if (img.width == img.height) {
                proporcao = 1
                width = 50
                height = 50
            }
            message.channel.send(url + "?width=" + width + "&height=" + height);
        }
        img.src = url;
    }
}     
    
    




}