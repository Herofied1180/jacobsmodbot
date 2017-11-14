const settings = require('../app.js');
const YTDL = require('ytdl-core')
const Discord = require('discord.js')

exports.run = (client, message) => {
  if (message.guild.voiceConnection) {
    message.guild.voiceConnection.disconnect();
    message.channel.send("Stopped song.")
  } else {
    message.channel.send("No songs are playing.")
  }
}




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Stop'],
  permLevel: 0
};

exports.help = {
  name: 'stop',
  description: 'Stops a currently playing song',
  usage: 'stop'
};