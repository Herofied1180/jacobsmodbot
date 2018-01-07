const settings = require('../app.js');
const YTDL = require('ytdl-core')
var servers = {};

function play(connection, message) {
  var server = servers[message.guild.id];

  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

  server.queue.shift();

  server.dispatcher.on("end", function() {
      if (server.queue[0]) play(connection, message);
      else connection.disconnect();
  });
}

exports.run = (client, message) => {
  const args = message.content.split(' ')
  if (!args[1]) {
    message.channel.send('Please provide a link.');
    return;
  }

  if (!message.member.voiceChannel) {
    message.channel.send('Please connect to a voice channel.');
    return;
  }
  if (!servers[message.guild.id]) servers[message.guild.id] = {
    queue: []
  };
  var server = servers[message.guild.id];

  if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
    play(connection, message);
  });

    server.queue.push(args[1]);
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Play'],
  permLevel: 0
};

exports.help = {
  name: 'play',
  description: 'Plays a yotube video in a voice channel via link.',
  usage: 'play [Youtube Link]'
};