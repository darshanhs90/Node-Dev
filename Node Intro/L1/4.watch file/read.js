 var fs=require("fs");
console.log("Starting");
var config=JSON.parse(fs.readFileSync("config.json"));
console.log("Config is: ",config);
console.log("Ended,watching now");
fs.watchFile("config.json",function(current,previous){
    console.log("changed");
    config=JSON.parse(fs.readFileSync("config.json"));
    console.log("New Config is: ",config);

    });