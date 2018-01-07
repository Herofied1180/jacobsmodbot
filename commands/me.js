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
  description: 'Used to make text italic.',
  usage: 'me [Message]'
};
