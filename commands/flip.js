exports.run = (client, message) => {
  var c = [
    "you got heads!",
    "you got tails!"
  ]
  message.channel.send('Flipping coin...')
.then(msg => {
    message.reply(c[Math.floor(Math.random() * c.length)]);
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
