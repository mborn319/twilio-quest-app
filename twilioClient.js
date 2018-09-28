// Stores the basic twilio setup.
var config = require('./config.js');
var twilio = require('twilio');
var client = new twilio( config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN );
var twilioVerificationCode = 'NBWX5MWU04G7DOR';

module.exports = {
	twilio: twilio,
	client: client
};