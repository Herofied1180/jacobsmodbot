exports.run = (client, message) => {
  message.channel.send('The roles for jacob`s server are')
.then(msg => {
  message.channel.send("```"+"Head Admin: must be very well trusted by the host\n"+"Admin: Trusted by host a have no bad records on my discord servere\n"+"Programer: must have maid your own program\n"+"Modder: must know how to Modify game files\n"+"Tester: helps modders test out new mods\n"+"Youtube Subscriber: must be subscribed to me on youtube"+"Muted: a bot or admin muted you\n"+"Switch: must owen the switch\n"+"Wii U: Must Own A Wii U"+"```");  
    });
};    

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['Roles'],
  permLevel: 0
};

exports.help = {
  name: 'roles',
  description: 'Shows the roles for jacob`s server',
  usage: 'roles'
};
