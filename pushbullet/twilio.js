var accountSid = 'id';
var authToken = "token";
var client = require('twilio')(accountSid, authToken);
client.messages.create({
    body: "Alarm",
    to: "+14697672278",
    from: "+14694164117"
}, function(err, message) {
    console.log(err);
    console.log(message);
     
});
