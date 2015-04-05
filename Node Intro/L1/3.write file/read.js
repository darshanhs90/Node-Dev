var fs=require("fs");
console.log("Starting");
//Synchronous file write
fs.writeFileSync("a.txt","The data which is written");
//Asynchronous file write
fs.writeFile("a.txt","The datasd",function(error){
    console.log("File Written");
    });
console.log("carry on");