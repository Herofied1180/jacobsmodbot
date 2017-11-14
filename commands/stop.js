const settings = require('../app.js');
const YTDL = require('ytdl-core')
var servers = {};



exports.run = (client, message) => {
  var server = servers[message.guild.id]
  if (message.guild.voiceConnection){
    server.dispatcher.end()
    message.channel.send("Song stopped.")
  }
  }




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Stop'],
  permLevel: 0
};

exports.help = {
  name: 'skip',
  description: 'Stops a currently playing song',
  usage: 'skip'
};