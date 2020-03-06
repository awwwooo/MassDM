const Discord = require('discord.js');
const client = new Discord.Client();

let msg = "Dming Members"; 
let token ="Njg1NTA5NjE4MTk3NDYzMDQ3.XmKJ8Q.7gejNKr2HplUTFO2wPmwYNzO0uk"; // Token

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
