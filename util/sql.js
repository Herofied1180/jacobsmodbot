module.exports = function (){

	const express = require('express');
	const mysql = require('mysql');

	const db = mysql.createConnection({
  		host     : 'sql302.epizy.com',
  		user     : 'epiz_20877597',
  		password : 'oCdId7DKbHm9',
  		database : 'epiz_20877597_admin'
	});

	const app = express();

	app.listen('3000', () => {
		console.log('Started server on port 3000');
	});

}