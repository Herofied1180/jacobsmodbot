const chalk = require('chalk');
const settings = require('../settings.json');
module.exports = client => {
  function setGame(gameName) {
		client.user.setPresence({ game: { name: gameName, type: 0 } })
    }
    setGame(`Type | ${settings.prefix}help`);
    console.log(chalk.bgGreen.black('Bot: The game has been set'));
};