exports.run = (client, message) => {
    //Has The Specified Client Id
    message.channel.send('Shutting down...');
    client.destroy((err) => {
      console.log(err);
    });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Shutdown'],
  permLevel: 4
};

exports.help = {
  name: 'shutdown',
  description: 'Shuts off the bot.',
  usage: 'shutdown'
};