const Discord = require('discord.js')
const client = new Discord.Client()
const request = require('request')
const chalk = require('chalk')
//////variable//////
const configfile = require('./config.json');
var token = configfile.token;
/////////////
if (!configfile.token) {
    console.clear()
    setTimeout(function() {
        console.clear();
        console.log("- [ERROR] Le token n'a pas été trouvé. Vérifi si tu as bien rentré le token dans le README".red);
    }, 1000);
}
let url = "https://discordapp.com/api/v7/users/@me";
request(
    url, {
        method: "GET",
        headers: {
            authorization: token
        }
    },
    

function(error, response, body) {
    if (response.statusCode === 200) {} else {
        console.clear();
        console.log(chalk.red(`- [Erreur] Échec de l'authentification avec Discord. Suivez les instructions et entrez votre token dans config.json.`))
        process.exit();
    }
    console.clear()
////////console//////



commandIntervals = [];                         
var logoconsole = [
    `
   ██╗      ██████╗  ██████╗  ██████╗ ███████╗██████╗     
   ██║     ██╔═══██╗██╔════╝ ██╔════╝ ██╔════╝██╔══██╗    
   ██║     ██║   ██║██║  ███╗██║  ███╗█████╗  ██████╔╝    
   ██║     ██║   ██║██║   ██║██║   ██║██╔══╝  ██╔══██╗    
   ███████╗╚██████╔╝╚██████╔╝╚██████╔╝███████╗██║  ██║    
   ╚══════╝ ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝     `]
var consolerandoml = logoconsole[Math.floor(Math.random() * logoconsole.length)]
console.log(chalk.cyan(consolerandoml));
console.log(chalk.cyan.dim(`╔═══════════════════════════════════════╗`))
console.log(chalk.green('  Dev By R4y4n :) | Discord.gg/punchnox'))
console.log(chalk.cyan.dim(`╚═══════════════════════════════════════╝`))
})
/////////log////
client.on('message', message => {
if (message.content.includes('@everyone') || message.content.includes('@here')) {
    if (message.author.id === client.user.id) return;
    let serveur = message.guild;
    if (!serveur) return console.log(chalk.yellow.underline(`1 message ghostping surppimé mp: \n${message.author.tag}: ${message.content} | ${message.createdAt}`))
    console.log(chalk.yellow.underline(`1 message ghostping surppimé serveur: \n${message.guild.name} de ${message.author.tag}: ${message.content}`))
} else return
})

client.on("messageDelete", message => {
if (message.author.id === client.user.id) return;
if (message.channel.type === "dm") {
    console.log(chalk.gray('[-] Message Privé : '))
    console.log(chalk.gray('======================'))
    console.log(chalk.gray.underline(`1 message mp surppimé \n${message.author.tag}: ${message.content} | ${message.createdAt}`))
    console.log(chalk.gray('======================'))
}
})
client.on("messageUpdate", message => {
if (message.author.id === client.user.id) return;
if (message.channel.type === "dm") {
    console.log(chalk.gray('[-] Message Privé : '))
    console.log(chalk.gray('======================'))
    console.log(chalk.gray.underline(`1 message mp modifié \n${message.author.tag}: ${message.content} | ${message.createdAt}`))
    console.log(chalk.gray('======================'))
}
})
client.on("messageDelete", message => {
    if (message.author.id === client.user.id) return;
    if (message.channel.guild) {
        console.log(chalk.red(`[-] Sur le Serveur  [${message.guild.name}] : `))
        console.log(chalk.red('======================'))
        console.log(chalk.red.underline(`1 message surppimé \n${message.author.tag}: ${message.content} | ${message.createdAt}`))
        console.log(chalk.red('======================'))
    }
    })
    client.on("messageUpdate", message => {
    if (message.author.id === client.user.id) return;
    if (message.channel.type === "guild") {
        console.log(chalk.red(`[-] Sur le Serveur  [${message.guild.name}] : `))
        console.log(chalk.red('======================'))
        console.log(chalk.red.underline(`1 message modifié \n${message.author.tag}: ${message.content} | ${message.createdAt}`))
        console.log(chalk.red('======================'))
    }
    })

client.on('guildDelete', guild => {
    console.log(chalk.magenta('======================'))
console.log(chalk.magenta.underline(`Vous avez quitté le serveur [${guild.name}]`))
console.log(chalk.magenta('======================'))
})

client.on('guildCreate', guild => {
    console.log(chalk.magenta('======================'))
console.log(chalk.magenta.underline(`Vous avez rejoint le serveur [${guild.name}]`))
console.log(chalk.magenta('======================'))
///////////test//////////
 
})
client.login(token)
