module.exports = member => {
  let guild = member.guild;
  member.guild.channels.find("name", "welcome").send(`Please say goodbye to ${member.user.username} we will miss you!`);
};
