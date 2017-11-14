exports.run = (client, message, args) => {
  const reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  const user = args[0];
  const action_log = client.channels.find('name', 'action_log');
  if (!action_log) return message.reply('I cannot find a action_log channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the pardon.');
  if (!user) return message.reply('You must supply a User Resolvable(User ID NOT a mention).').catch(console.error);
  message.guild.unban(user);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Pardon'],
  permLevel: 1
};

exports.help = {
  name: 'pardon',
  description: 'Pardons the user.',
  usage: 'pardon [user id] [reason]'
};
