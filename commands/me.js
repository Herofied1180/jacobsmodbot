exports.run = (client, message) => {
  message.channel.send('me')
    .then(msg => {
      message.channel.send("*"+message.content+"*")
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Me'],
  permLevel: 0
};

exports.help = {
  name: 'me',
  description: 'A roleplay command used to show action by another',
  usage: 'me'
};
