const settings = require('../app.js');
const YTDL = require('ytdl-core')
const Discord = require('discord.js')
var servers = {};

exports.run = (client, message) => {
  var server = servers[message.guild.id];

  if (message.guild.voiceConnection)
  {
      server.dispatcher.end();
      console.log("[" + new Date().toLocaleString() + "] Stopped the queue.");
      message.channel.send("Stopped song.");
  }﻿ else {
    message.channel.send("Song isn't playing.");
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