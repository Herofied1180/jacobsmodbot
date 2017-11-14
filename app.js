const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require("./settings.json");
const fs = require('fs');
const moment = require('moment');
const YTDL = require('ytdl-core');
const hookClient = require('./util/webhookClient');
const sql = require('./util/sql');
var servers = {};

// guildBanAdd Event
client.on('guildBanAdd', function(guild, user){
  if (guild.channels.find("name", "action-log")){
    guild.channels.find("name", "action-log").sendEmbed(new Discord.RichEmbed()
      .setDescription(`${user.username} has been banned!`)
      .setTitle('User Ban: ')
      .setColor('#fc2525')
    );
  }
});

// guildBanRemove Event
client.on('guildBanRemove', function(guild, user){
  if (guild.channels.find("name", "action-log")){
    guild.channels.find("name", "action-log").sendEmbed(new Discord.RichEmbed()
      .setDescription(`${user.username} has been unbanned.`)
      .setTitle('User Unban: ')
      .setColor('#eddd09')
    );
  }
});

// guildMemberAdd Event
client.on('guildMemberAdd', function(member) {
  if (member.guild.channels.find("name", "welcome") && member.guild.channels.find("name", "action-log")) {
    member.guild.channels.find("name", "welcome").send("Welcome " + member.toString() + " to the server!");

    member.guild.channels.find("name", "action-log").sendEmbed(new Discord.RichEmbed()
      .setDescription(`${member.toString()} has joined the server.\n Joined At: ` + member.joinedAt)
      .setTitle('User Join: ')
      .setColor('#39db0d')
    );
  }

  if (member.addRole(member.guild.roles.find("name", "Pending Approval"))){
    member.addRole(member.guild.roles.find("name", "Pending Approval"));
  }
});

// guildMemberRemove Event
client.on('guildMemberRemove', function(member) {
  if (member.guild.channels.find("name", "welcome") && member.guild.channels.find("name", "action-log")) {
    member.guild.channels.find("name", "welcome").send("Bye " + member.toString() + ". Hope to see you again!");

    member.guild.channels.find("name", "action-log").sendEmbed(new Discord.RichEmbed()
      .setDescription(`${member.toString()} has left the server.`)
      .setTitle('User Leave: ')
      .setColor('#0d5bdb')
    );

    member.send("Either you have been banned from " + member.guild.name + ', or you have left ' + member.guild.name + '.');
  }
});


exports.play = function(connection, message) {
  var server = servers[message.guild.id];

  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

  server.queue.shift();

  server.dispatcher.on("end", function() {
      if (server.queue[0]) play(connection, message);
      else connection.disconnect();
  });
}


const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Loading Command: ${props.help.name}. 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


    
    

client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  if (message.guild.roles.has('name', settings.modrolename)) {
    let mod_role = message.guild.roles.find('name', settings.modrolename);
    if (mod_role && message.member.roles.has('name', settings.modrolename)) permlvl = 1;
  } else if (message.guild.roles.has('name', settings.adminrolename)) {
    let admin_role = message.guild.roles.find('name', settings.adminrolename);
    if (admin_role && message.member.roles.has('name', settings.adminrolename)) permlvl = 2;
  } else if (message.guild.roles.has('name', settings.coownerrolename)) {
    let co_role = message.guild.roles.find('name', settings.coownerrolename);
    if (co_role && message.member.roles.has('name', settings.coownerrolename)) permlvl = 3;
  } else if (message.guild.roles.has('name', settings.coownerrolename)) {
    let owner_role = message.guild.roles.find('name', settings.ownerrolename);
    if (owner_role && message.member.roles.has('name', settings.ownerrolename)) permlvl = 5;
  } else {
    permlvl = 1;
    
  }
  if (message.author.id == settings.ownerid) permlvl = 5;
  if (message.author.id == settings.coownerid) permlvl = 5;
  return permlvl;
  if (modrolename.length < 1) {
  	
  }
};


var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log("[ModBot\\Warning]: Unknown warning.");
});

client.on('error', e => {
  console.log("[ModBot\\Error]: Unknown error.");
});

//External Events

// message Event
client.on('message', function(message) {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(settings.prefix)) return;
  let command = message.content.split(' ')[0].slice(settings.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    if (client.commands.get(command).conf.enabled == true) {
      cmd = client.commands.get(command);
    } else if (client.commands.get(command).conf.enabled == false) {
      message.channel.send(settings.prefix+command+" is disabled. Please try again later.");
    }
  } else if (client.aliases.has(command)) {
    if (client.commands.get(client.aliases.get(command)).conf.enabled == true) {
      cmd = client.commands.get(client.aliases.get(command));
    } else if (client.commands.get(client.aliases.get(command)).conf.enabled == false) {
      message.channel.send(settings.prefix+command+" is disabled. Please try again later.");
    }
  }
  if (cmd) {
    message.delete();
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message);
  }

});

client.login(settings.SonicBotPublicToke);