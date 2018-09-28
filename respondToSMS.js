const express = require('express');
const bodyParser = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sms', function(req, res) {
  const twiml = new MessagingResponse();

  const body = `Hi! It looks like your phone number was born in ${req.body.FromCountry}`;

  twiml.message( body );
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

const server = app.listen(8081, function () {
  const host = server.address().address
  const port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});