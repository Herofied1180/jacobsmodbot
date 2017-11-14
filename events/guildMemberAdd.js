module.exports = member => {
  let guild = member.guild;
  member.guild.channels.find("name", "welcome").send("Welcome "+ member.toString()+" to the server!")
};
