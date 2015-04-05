var http=require("http");
var fs=require("fs");

console.log("Starting");

var content=JSON.parse(fs.readFileSync("config.json"));
var host=content.host;
var port=content.port;
/*var host="127.0.0.1";
var port=443;*/
var server=http.createServer(function(request,response){
	console.log("Received request"+request.url);
	fs.readFile("./"+request.url,function(error,data){
		if(error){
			response.writeHead(404,{"Content type":"text/plain"});
			response.end("Sorry the page was not found");
		}else{
			response.writeHead(200,{"Content type":"text/html"});
			response.end(data);
		}
	});
	/*can also accept some argument
	response.end("Hello world!");*/
});
server.listen(port,host,function(){
console.log("Listening"+host+":"+port);
});
fs.watchFile("config.json",function(current,previous){
content=JSON.parse(fs.readFileSync("config.json"));
server.close();
host=content.host;
port=content.port;
server.listen(port,host,function(){
console.log("Listening"+host+":"+port);
});

});