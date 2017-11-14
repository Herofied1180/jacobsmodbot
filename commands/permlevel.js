exports.run = (client, message) => {
  message.channel.send('Loading Command...')
.then(msg => {
      message.reply("```"+"Level 0 = everone\n"+"Level 1 = Admin role\n"+"Level 2 = Head Admin role\n"+"Level 3 = Co-Owner\n"+"Level 4 = Owner Rank\n"+"Level 5 = Bot Owners/Server Owners\n"+"```");
    });
};    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p', 'Permlevel'],
  permLevel: 0
};

exports.help = {
  name: 'permlevel',
  description: 'Shows all the perm levels',
  usage: 'permlevel'
};
