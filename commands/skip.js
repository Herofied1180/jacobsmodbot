const settings = require('../app.js');
const YTDL = require('ytdl-core')
var servers = {};



exports.run = (client, message) => {
var server = servers[message.guild.id]
  if (message.guild.voiceConnection){
    server.dispatcher.end()
    message.channel.send("Your song has ben skipped")
  }
}




exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['Skip'],
  permLevel: 0
};

exports.help = {
  name: 'skip',
  description: 'Skips a currently playing song.',
  usage: 'skip'
};