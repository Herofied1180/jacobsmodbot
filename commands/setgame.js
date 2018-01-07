exports.run = (client, message) => {
  //Has One of Specified Roles
  const args = message.content.split(/\s+/g).slice(1);
  let gameStatus = args.join(' '); //The Game To Set
  setGame(gameStatus); //Set The Specified Game Status
  message.reply('The game status is now set to '+gameStatus+'.'); //Confirm The Game Status Was Set
};    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Embed'],
  permLevel: 5
};

exports.help = {
  name: 'setgame',
  description: 'Sets the game the bot is playing to the specified game.',
  usage: 'setgame [game]'
};