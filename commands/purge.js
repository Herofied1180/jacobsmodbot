exports.run = (client, message, args) => {
  var messagecount = parseInt(args.join(' '));
  if (messagecount > 100 || messagecount < 1){
    message.channel.send('Unable to purge over 100 messages or under 1 messages due to one of Discord`s limits.');
  } else if (messagecount > 1){
    message.channel.fetchMessages({
      limit: messagecount
    }).then(messages => message.channel.bulkDelete(messages));
  } else if (messagecount = 1){
    message.delete();
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Purge'],
  permLevel: 1
};

exports.help = {
  name: 'purge',
  description: 'Purges X amount of messages from a given channel.',
  usage: 'purge <number>'
};
