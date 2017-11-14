exports.run = (client, message) => {
  message.channel.send('W.I.P(Work in progress) Command.');
};    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Youtube'],
  permLevel: 0
};

exports.help = {
  name: 'youtube',
  description: 'Gives you a link to jacob`s youtube channel',
  usage: 'youtube'
};
