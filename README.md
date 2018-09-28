# Twilio Quest App

A bunch of Node.JS scripts to interact with Twilio as per [Twilio Quest][1].

## Getting Started

1. Clone this repo.
1. Copy `config.js.example` to `config.js`
1. Update `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` to match the values found in your [Twilio Console][2]
1. Update `TWILIO_PHONE_NUMBER` to match your [Twilio phone number][3].
1. Run `node sendSMS.js` to send an SMS to your Twilio number.

## App Functions

* `respondToSMS.js` is a phone number webhook response script to respond to an SMS with a "Hi, you're from X country" response. See https://www.twilio.com/quest/mission/1/objective/101
* `sendSMS.js` is a simple send-sms-to-my-twilio-number script.

[1]: https://www.twilio.com/quest/
[2]: https://www.twilio.com/console
[3]: https://www.twilio.com/console/phone-numbers/incoming