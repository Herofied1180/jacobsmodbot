//W.I.P Command

const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const settings = require('../settings.json');
exports.run = async (client, message, args) => {
  const user = message.mentions.users.first();
  const action_log = client.channels.find('name', 'action-log');
  const caseNum = await caseNumber(client, action_log);
  if (!action_log) return message.reply('Unable to find a action-log channel');
  if (message.mentions.users.size < 1) return message.channel.send('You must mention someone to warn them.').catch(console.error);
  const reason = args.splice(1, args.length).join(' ') || `Awaiting moderator's input. Use ${settings.prefix}reason ${caseNum} <reason>.`;
  const embed = new RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Warning\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`)
  .setFooter(`Case ${caseNum}`);
  return client.channels.get(action_log.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Warn', 'w'],
  permLevel: 1
};

exports.help = {
  name: 'warn',
  description: 'Issues a warning to the mentioned user.',
  usage: 'warn [mention] [reason]'
};
