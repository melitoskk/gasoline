const { ClientUser } = require("discord.js");
const { url } = require("inspector");

exports.run = async (client, message, args) => {
    if (args.length == 3) {
        console.log(args.length)
        const grupo = args[0].replace('-','')
        const nome = args[1].replace('-','')
        const privacidade = args[2].replace('-','')
        console.log(grupo)
        console.log(nome)
        const messages = await message.channel.messages.fetch({ limit: 100 });
        const lastMessage = messages.sort((a, b) => b.createdTimestamp - a.createdTimestamp).filter((m) => m.author.bot).first();
        if (lastMessage.author.bot) {
            if (lastMessage.attachments.size > 0){
                console.log('com attach')
                linksave = lastMessage.attachments.first().url
                console.log(linksave)
                try {
                    let firebasevar = require(`../firebase.js`);
                    firebasevar.run(client, message, args, grupo, nome, privacidade, linksave);
                } catch(erro) {
                    console.log(erro);
                }
            }
            if (lastMessage.content.includes('?width='))
                console.log('com link')
                linksave = lastMessage.content
                console.log(linksave)
                try {
                    let firebasevar = require(`../firebase.js`);
                    firebasevar.run(client, message, args, grupo, nome, privacidade, linksave);
                } catch(erro) {
                    console.log(erro);
                }

        }
       
    }
    else if (args.length == 2) {
        console.log(args.length)
        const grupo = args[0].replace('-','')
        const nome = args[1].replace('-','')
        const privacidade = ''
        console.log(grupo)
        console.log(nome)
        const messages = await message.channel.messages.fetch({ limit: 100 });
        const lastMessage = messages.sort((a, b) => b.createdTimestamp - a.createdTimestamp).filter((m) => m.author.bot).first();
        if (lastMessage.author.bot) {
            if (lastMessage.attachments.size > 0){
                console.log('com attach')
                linksave = linksave = lastMessage.attachments.first().url
                console.log(linksave)
                try {
                    let firebasevar = require(`../firebase.js`);
                    firebasevar.run(client, message, args, grupo, nome, privacidade, linksave);
                } catch(erro) {
                    console.log(erro);
                }
            }
            else if (lastMessage.content.includes('?width='))
                console.log('com link')
                linksave = lastMessage.content
                console.log(linksave)
                try {
                    let firebasevar = require(`../firebase.js`);
                    firebasevar.run(client, message, args, grupo, nome, privacidade, linksave);
                } catch(erro) {
                    console.log(erro);
                }

        }
        
    }
    if (args.length < 2) {
        message.channel.send("Não foi possivel salvar. Grupo e/ou Nome faltando.")
    }    
}