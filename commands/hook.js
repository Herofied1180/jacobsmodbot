exports.run = (client, message) => {
  // The content of the user's message
  const msg1 = message.content;

  // The arguments of the command
  const args = message.content.split(/\s+/g).slice(1);

  // The webhook id
  var hookid = msg1.args[2];

  // The webhook token
  var hooktoke = msg1.args[3];

  // The first argument
  const arg1 = msg1.args[1]

  // If the command says to create a webhook create one
  if (arg1 == 'create') {
    // Create a new webhook
    const hook = new Discord.WebhookClient(hookid, hooktoke);

    // Send a message using the webhook
    hook.send('Created webhook!');
  } else if (arg1 == 'remove') {
    // Remove the webhook
    Discord.WebhookClient(hookid, hooktoke).delete

    // Log the action in the action log
    message.author.guild.channels.find("name", "action-log").sendEmbed(new Discord.RichEmbed()
    .setDescription(`A webhook with the id `+hookid+` and with the token `+hooktoke+` has been deleted.`)
    .setTitle('Webhook Remove: ')
    .setColor('#fc2525')
    );
  }
};    

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['h', 'Hook', 'webhook', 'Webhook'],
  permLevel: 5
};

exports.help = {
  name: 'hook',
  description: 'Creates a webhook.',
  usage: 'hook [type] [hookid] [hooktoken]'
};
