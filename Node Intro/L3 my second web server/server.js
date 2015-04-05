var http=require("http");
var fs=require("fs");
var content=JSON.parse(fs.readFileSync("config.json"));
var host=content.host;
var port=content.port;	
var express=require("express");
var app=express();
//app.use(app.router);
var users={
"1":{"name":"Darshan",
	 "twitter":"dash"},
"2":{"name":"Darshan2",
	"twitter":"dash2"}
}
app.use(express.static(__dirname));

app.get("/",function(request,response){
response.send("Hello");
});
app.get("/hello/:text",function(request,response){
response.send("Hello"+request.params.text);
});
app.get("/user/:id",function(request,response){

	if(request.params.id=="1"){
		response.send("Hello "+users[1].name);
	}
	else{
		response.send("Hello "+users[2].name);
	}
});

app.listen(port,host);