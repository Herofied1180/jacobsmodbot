exports.run = (client, message) => {
  message.channel.send('Game:\nhttps://www.roblox.com/games/1165330074/Kohls-Admin-House');
};    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Game'],
  permLevel: 0
};

exports.help = {
  name: 'game',
  description: 'Shows jacob`s Roblox game',
  usage: 'game'
};
