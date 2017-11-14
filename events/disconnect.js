const chalk = require('chalk');
module.exports = client => { // eslint-disable-line no-unused-vars
  console.log(`You have been disconnected at ${new Date()}`);
  /*client.channels.get('300403009089699841').send('SonicBot has been disconnected from discord')
  client.channels.get('353661221632737280').send('SonicBot has been disconnected from discord')*/
  console.log(chalk.bgRed.black('Bot: Disconnected from discord'));
};
