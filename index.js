const Discord = require('discord.js');
const client = new Discord.Client();

let msg = ""; 
let token = ""; // Token

client.on('ready', () => {
        client.guilds.forEach(g=>{
        g.members.forEach(member=>{
            setTimeout(function(){
        if(member.id == bot.user.id) return;
        if(member.user.bot) return;
        if(member.hasPermission("BAN_MEMBERS") || member.hasPermission("KICK_MEMBERS") || member.hasPermission("MANAGE_ROLES")) return;
        console.log(`Enviando mensagem para ${member.user.username}`);
        member.send(`${msg}`);
    }, 30000);
    });
})
});

client.login(token);
