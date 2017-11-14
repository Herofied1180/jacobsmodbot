exports.run = (client, message) => {
    //Has The Specified Client Id
    message.channel.send('Shutdown '+BotName+'.');
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
  description: 'Shuts down the bot',
  usage: 'shutdown'
};