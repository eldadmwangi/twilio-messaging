require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

console.log(accountSid);
const link = "https://www.facebook.com/eldad.mwangi";
const name = "Eldad";

client.messages
  .create({
    body: `Hi ${name},this is yourself, i'm out of the country reach me on ${link} `,
    from: "+17248355557",
    to: "+254715056130",
  })
  .then((message) => console.log(message.sid));
