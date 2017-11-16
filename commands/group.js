exports.run = (client, message) => {
  message.channel.send('Group:\nhttps://www.roblox.com/My/Groups.aspx?gid=3375991');
};    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Group'],
  permLevel: 0
};

exports.help = {
  name: 'group',
  description: 'Shows jacob`s Roblox group',
  usage: 'group'
};
