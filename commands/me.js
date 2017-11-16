exports.run = (client, message, args) => {
  message.channel.send(message.author+": *"+args[0]+"*")
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
