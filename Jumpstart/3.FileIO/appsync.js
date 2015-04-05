var fs=require("fs");
var content=fs.readFileSync('app.txt');
console.log(content.toString());