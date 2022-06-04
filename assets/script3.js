// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

fetch(
  "https://api.twilio.com/2010-04-01/Accounts/{ACe994be0ee460cf4c6c1ab1bd1584e8d4}/Messages.json"
);
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(
  ACe994be0ee460cf4c6c1ab1bd1584e8d4,
  d51b8959dd7cc478fbff8eeae9a42422
);

client.messages
  .create({ body: "I have arrived.", from: "+19302057266", to: "+15164048703" })
  .then((message) => console.log(message.sid));
