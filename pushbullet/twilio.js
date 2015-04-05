var accountSid = 'AC07275e4294f1b0d42623c3ec9559911e';
var authToken = "650d049a9bd99323fb899ce4b9e84fcc";
var client = require('twilio')(accountSid, authToken);
client.messages.create({
    body: "Alarm",
    to: "+14697672278",
    from: "+14694164117"
}, function(err, message) {
    console.log(err);
    console.log(message);
     
});