exports.run = (client, message) => {
  message.channel.send('Game:\nIn development.');
};    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Game'],
  permLevel: 0
};

exports.help = {
  name: 'game',
  description: 'The Diamond Bar And Grill ROBLOX game.',
  usage: 'game'
};
