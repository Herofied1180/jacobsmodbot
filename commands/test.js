exports.run = (client, message) => {
  message.channel.send('Ping 1: Success')
.then(msg => {
      message.channel.send('Ping 2: Success');
    });
};    

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['Test'],
  permLevel: 5
};

exports.help = {
  name: 'test',
  description: 'Developer command only.',
  usage: 'test'
};
