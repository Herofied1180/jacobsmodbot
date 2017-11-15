exports.run = (client, message) => {
  var c = random(0,1);
  message.channel.send('Flipping coin...')
.then(msg => {
      if (c = 0) {
        message.reply('you got tails!');
      } else if (c = 1) {
        message.reply('you got heads!');
      }
    });
};    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Flip'],
  permLevel: 0
};

exports.help = {
  name: 'flip',
  description: 'Flips a coin and returns heads or tails randomly',
  usage: 'flip'
};
