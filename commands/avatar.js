exports.run = (client, message) => {
  message.channel.send('Avatar:')
.then(msg => {
      message.reply(message.author.avatarURL);
    });
};    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Avatar'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Shows you your avatar.',
  usage: 'avatar'
};
