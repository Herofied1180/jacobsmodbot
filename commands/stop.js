const settings = require('../app.js');
const YTDL = require('ytdl-core')
const Discord = require('discord.js')
var servers = {};

exports.run = (client, message) => {
  var server = servers[message.guild.id];

  if (message.guild.voiceConnection)
  {
      for (var i = server.queue.length - 1; i >= 0; i--) 
      {
          server.queue.splice(i, 1);
   }
      server.dispatcher.end();
      console.log("[" + new Date().toLocaleString() + "] Stopped the queue.");
      message.channel.send("Stopped song.");
  }﻿
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