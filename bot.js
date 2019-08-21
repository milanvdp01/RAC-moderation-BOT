var Discord = require("discord.js");
var prefix = ";";
var client = new Discord.Client();

client.on("ready", () => {
    console.log("ready to rumble!");
    client.user.setActivity('king sleep', {
        type: 'WATCHING'
    }).catch(console.error);
    client.user.setActivity('Tr33zz his orders', {
        type: 'LISTENING'
    }).catch(console.error);
    client.user.setActivity('East Grestin Border Simulator', {
        type: 'STREAMING'
    }).catch(console.error);
    client.user.setActivity('With loltubers doggo', {
        type: 'PLAYING'
    }).catch(console.error);
    client.user.setActivity('The money pile getting smaller', {
        type: 'WATCHING'
    }).catch(console.error);
    client.user.setActivity('The money pile getting bigger', {
        type: 'WATCHING'
    }).catch(console.error);
});

var bannedwords = "loltubers is gay,kingleeboi is gay".split(",");

client.on("message", msg => {
    if (msg.guild === null) return;

    for (i = 0; i < bannedwords.length; i++) {
        if (msg.content.toLowerCase().includes(bannedwords[i])) {
            msg.delete();
            msg.reply("Don't discriminate our Minister!");
            return;
        }
    }

    if (msg.author.bot) return;
    if (!msg.member.hasPermission("Server Moderator")) return;

    if (!msg.content.toLowerCase().startsWith(prefix)) return;
    msg.delete();
    if (msg.content.toLowerCase().startsWith(prefix + "kick ")) {
        var mem = msg.mentions.members.first();
        mem.kick().then(() => {
            msg.channel.send(mem.displayName + " has successfully been kicked by " + msg.author.username + "!");
        }).catch(e => {
            msg.channel.send("An error occured!");
        });
    }
    if (msg.content.toLowerCase().startsWith(prefix + "ban ")) {
        var mem = msg.mentions.members.first();
        var mc = msg.content.split(" ")[2];
        mem.ban(mc).then(() => {
            msg.channel.send(mem.displayName + " has successfully been banned by " + msg.author.username + " for " + mc + " days!");
        }).catch(e => {
            msg.channel.send("An error occured!");
        });
    }
    if (msg.content.toLowerCase().startsWith(prefix + "mute")) {
        var mem = msg.mentions.members.first();
        if (msg.guild.roles.find("name", "Muted")) {
            mem.addRole(msg.guild.roles.find("name", "Muted")).then(() => {
                msg.channel.send(mem.displayName + " has successfully been muted!");
            }).catch(e => {
                msg.channel.send("An error occured!");
                console.log(e);
            });

        }
    }
    if (msg.content.toLowerCase().startsWith(prefix + "unmute")) {
        var mem = msg.mentions.members.first();
        if (msg.guild.roles.find("name", "Muted")) {
            mem.removeRole(msg.guild.roles.find("name", "Muted")).then(() => {
                msg.channel.send(mem.displayName + " has successfully been unmuted!");
            }).catch(e => {
                msg.channel.send("An error occured!");
                console.log(e);
            });

        }
    }
    if (msg.content.toLowerCase().startsWith(prefix + "purge")) {
        var mc = msg.content.split(" ")[1];
        msg.channel.bulkDelete(mc);
    }
    if (msg.content.toLowerCase().startsWith(prefix + "eval")) {
        var sc = msg.content.substring(msg.content.indexOf(" "));
        eval(sc);
    }
    if (msg.content.toLowerCase().startsWith(prefix + "calc")) {
        var ca = msg.content.substring(msg.content.indexOf(" "));
        msg.reply(ca + " is " + eval(ca).toFixed(2));
    }
    if (msg.content.toLowerCase().startsWith(prefix + "help")){
        msg.channel.send("I have 8 commands: ban, purge, kick, mute, unmute, eval, calc and help what they do is pretty much self explenatory");
    }
});

client.login("NjEyMDU2ODk3MzAyMDM2NDgw.XVc0bA.wcnsd5e6O6frKYt9f9Ose1lnLnk");