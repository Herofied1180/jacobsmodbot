/*

	The WebhookClient for testing

*/

/*

	The function to trigger the create webhook event
	
	Syntax: const Discord = require('discord.js');
			const hookClient = require('./util/webhookClient');
		..
			hookClient('Webhook ID', 'Webhook Token', 'Inital Webhook Message', Discord);

	Example: hookClient('ID Here', 'Token Here', 'Webhook connected!', Discord)

*/

module.exports = function(hookid, hooktoke, msg) {
	// The discord.js library
	const Discord = require('discord.js');

	// Create a new webhook
	var hook = new Discord.WebhookClient(hookid, hooktoke);

	// Send a message using the webhook
	hook.send(msg);
};