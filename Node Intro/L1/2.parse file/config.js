var fs=require("fs");
console.log("Starting");
var content=fs.readFileSync("config.json");
console.log("Contents: "+content);
var obj=JSON.parse(content);
console.log("Object: ",obj);
console.log("Username: ",obj.username);
console.log("Here it ends");