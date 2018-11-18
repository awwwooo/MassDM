const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(100);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 270000);


const Discord = require('discord.js');
const client = new Discord.Client();

let mensagem = ""; // Mensagem que será enviada no privado, caso deseje faezr uma quebra de linha utilize '\n'
let token = ""; // Token

client.on('ready', () => {
        client.guilds.forEach(g=>{
        g.members.forEach(member=>{
            setTimeout(function(){
        if(member.id == bot.user.id) return;
        if(member.user.bot) return;
        if(member.hasPermission("BAN_MEMBERS") || member.hasPermission("KICK_MEMBERS") || member.hasPermission("MANAGE_ROLES")) return;
        console.log(`Enviando mensagem para ${member.user.username}`);
        member.send(`${mensagem}`);
    }, 30000);
    });
})
});

client.login(token);
