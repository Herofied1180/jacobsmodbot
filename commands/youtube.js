exports.run = (client, message) => {
  message.channel.send('Youtube Channel: W.I.P');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Youtube', 'yt'],
  permLevel: 0
};

exports.help = {
  name: 'youtube',
  description: 'Gives you a link to jacob`s youtube channel',
  usage: 'youtube'
};
