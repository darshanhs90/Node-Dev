var fs=require("fs");
fs.readFile('app.txt',function(error,data){
console.log(data.toString());
});
console.log("async");