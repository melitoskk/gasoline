const Discord = require("discord.js");
const client = new Discord.Client();
const config = require(`./bot/config.json`);
var url ="aa"
var channel = ''
const dotenv = require("dotenv");

dotenv.config();

client.on('ready', ()=> {
    console.log(`${client.user.username} iniciou :pogn`)
});
//seta var url pro link do anexo

//deixar pegar os links qnd sao mandados direto (link n conta como anexo)
client.on('message', (message) => { 
    if (message.content.includes('https://tenor.com/view/')) { 
        const tenordirect = message.content
        message.channel.send(``, {files: [tenordirect + ".gif"]});
        url = tenordirect + ".gif"
        console.log(url)
    }
  })

//definir o script q eh pra executar
client.on('message', function(message) {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    if (!message.content.toLowerCase().startsWith(config.prefixo)) return;
    if(message.attachments.first()){
        console.log('atachado')
        const link = message.attachments.first().url
        const args2 = message.content.slice(config.prefixo.length).split("-") +  " " + `${link}`;
        const args = args2.split(" ")
        console.log(args)
        const comando = args.shift().toLowerCase();

    
        try {
            let arquivoComando = require(`./commands/${comando}.js`);
            arquivoComando.run(client, message, args, Discord);
        } catch(erro) {
            console.log(erro);
        }
    }else {
        console.log('sem attach')
        const args = message.content.slice(config.prefixo.length).split(" ") ;
        console.log(args)
        const comando = args.shift().toLowerCase();
        const canalid = message.channel.id
        console.log(canalid)

    
        try {
            let arquivoComando = require(`./commands/${comando}.js`);
            arquivoComando.run(client, message, args, Discord);
        } catch(erro) {
            console.log(erro);
        }
    }



    

});

//embed do g!help
const logo = 'https://cdn.discordapp.com/attachments/827447700437336087/828501525541421056/gasolineprofpic.png'
let embedhelp = new Discord.MessageEmbed()
    .setAuthor('Comandos Gasoline')
    .setColor('#722f37')
    .setDescription("Comandos disponíveis para uso")
    .addFields(
        {
        name: 'g!resizefoto',
        value: 'Redimensiona a foto enviada para o tamanho de um emote, mantendo como imagem.',
        inline: false,
        },
        {
        name: 'g!resizegif',
        value: 'Redimensiona proporcionalmente o gif enviado para o tamanho de um emote, mantendo como .gif.',
        inline: false,
        },
        {
            name: 'g!resizecrop',
            value: 'Redimensiona para o tamanho de um emote, indepente se for imagem ou gif, mantendo o tipo do arquivo.',
            inline: false,
            },
        {
        name: 'g!resizeconvert',
        value: 'Redimensiona a imagem enviada para o tamanho de um emote, convertendo-a para .gif.',
        inline: false,
        },
        {
            name: 'g!save <Nome do Grupo> <Nome do Emote> <public/private>',
            value: 'Salva a ultima foto enviada pelo bot na nuvem, e te envia um link para poder ver todos os salvos.',
            inline: false,
        
    }
    )
    .setFooter('Gasoline Emote Maker',logo)
    
    module.exports = { embedhelp };
//deixar o bot on
client.login(process.env.TOKEN);