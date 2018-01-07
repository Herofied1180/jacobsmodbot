exports.run = (client, message) => {
  message.channel.send('Invite link:')
.then(msg => {
  message.channel.send('https://discord.gg/46xRJxy');
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
  description: `Shows the Discord server's invite link.`,
  usage: 'invite'
};
