var config = require('./config.js');
var twilioClient = require('./twilioClient');

var date = new Date();
var dateString = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
var timeString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
var body = `Greetings! The current time is: ${dateString} ${timeString} ${twilioVerificationCode}`;

client.messages.create({
  body: body,
  to: '+12092104311',
  from: config.TWILIO_PHONE_NUMBER
});