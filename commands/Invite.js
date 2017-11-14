exports.run = (client, message) => {
  message.channel.send('To join jacob`s server click this link')
.then(msg => {
  message.channel.send('https://discord.gg/fp4Ht35');
    });
};    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Invite'],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'Gives you a link to jacob`s discord server.',
  usage: 'invite'
};
