module.exports = member => {
  let guild = member.guild;
  member.addRole(member.guild.roles.find("name", "Community Member"));
};
