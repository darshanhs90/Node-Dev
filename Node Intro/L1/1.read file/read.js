var fs=require("fs");
console.log("Starting");
//asynchronous file read
/*fs.readFile("a.txt",function(error,data){
    console.log("Contents: "+ data);
    });*/
//synchronous file read
var content=fs.readFileSync("a.txt");//synchronous file read
console.log("Contents: "+content);
console.log("carry on");