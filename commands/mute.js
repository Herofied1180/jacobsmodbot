const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const reason = args.slice(1).join(' ') || `No specified reason`;
  const user = message.mentions.users.first();
  const action_log = client.channels.find('name', 'action-log');
  const muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!action_log) return message.reply('Unable to find an action-log channel.').catch(console.error);
  if (!muteRole) return message.reply('Unable to find a mute role.').catch(console.error);
  if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Un/mute\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('Please give Mod Bot permission to Manage Roles.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(action_log.id).send({embed}).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(action_log.id).send({embed}).catch(console.error);
    });
    user.send(`You have been muted in Diamond Bar And Grill, by ${message.author} for:\n${reason}`);
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['unmute', 'Mute'],
  permLevel: 1
};

exports.help = {
  name: 'mute',
  description: 'Mutes or unmutes the specified user.',
  usage: 'un/mute [mention] [reason]'
};
