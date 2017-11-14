exports.run = (client, message) => {
  const args = message.content.split(/\s+/g).slice(1);
  message.channel.sendEmbed(new Discord.RichEmbed()
    .setDescription(args.slice(1).slice(1).join(' '))
    .setTitle(args[0])
    .setColor(args[1])
  );
};    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Embed'],
  permLevel: 0
};

exports.help = {
  name: 'embed',
  description: 'Embeds the selected message',
  usage: 'embed [description] [title] [color]'
};