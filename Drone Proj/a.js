var arDrone = require('ar-drone');
var client = arDrone.createClient();

console.log("asd");
client.takeoff();
console.log("asd");
client
  .after(2000, function() { 
   this.clockwise(0.25);
   this.stop();
  })
  .after(2000, function() {
    this.clockwise(0.25);
     this.stop();
  })
  .after(2000, function() {
    this.clockwise(0.25);
    this.stop();
  })
  .after(1000, function() {
    this.stop();
    this.land();
  });