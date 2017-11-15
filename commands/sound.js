const settings = require('../app.js');
const YTDL = require('ytdl-core')
var servers = {};

function play(connection, message, sound) {
  var server = servers[message.guild.id];

  if (message.guild.voiceChannel) {
    connection.disconnect();
  }

  if (sound == "wrong") {
    server.queue[0] = 'https://www.youtube.com/watch?v=RT3DirvAL-U&index=3&list=PLA_ZFp8wPEPBMbtlYW32cgqQtP549lwVa'
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
  } else if (sound == "troll") {
    //server.dispatcher = connection.playStream(YTDL('', {filter: "audioonly"}));
    message.channel.send('W.I.P Sound Effect')
  } else if (sound == "undertale") {
    server.dispatcher = connection.playFile('test.mp3');
  }

  server.queue.shift();

  server.dispatcher.on("end", function() {
      if (server.queue[0]) play(connection, message);
      else connection.disconnect();
  });
}

exports.run = (client, message) => {
  const args = message.content.split(' ')
  if (!args[1]) {
    message.channel.send('Please Include A Sound');
    return;
  }

  if (!message.member.voiceChannel) {
    message.channel.send('Please Connect To a Voice Channel');
    return;
  }
  if (!servers[message.guild.id]) servers[message.guild.id] = {
    queue: []
  };
  var server = servers[message.guild.id];

  if(!message.guild.voiceConnection && args[1].length > 0) message.member.voiceChannel.join().then(function(connection){
    play(connection, message, args[1]);
  });

    server.queue.push(args[1].toLowerCase());
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sound'],
  permLevel: 0
};

exports.help = {
  name: 'sound',
  description: 'Plays a sound effect in a voice channel',
  usage: 'sound [sound effect]'
};