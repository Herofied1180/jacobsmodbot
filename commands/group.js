exports.run = (client, message) => {
  message.channel.send('Group:\nhttps://www.roblox.com/My/Groups.aspx?gid=3735673');
};    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Group'],
  permLevel: 0
};

exports.help = {
  name: 'group',
  description: 'The Diamond Bar And Grill ROBLOX group.',
  usage: 'group'
};
