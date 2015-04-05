var http=require("http");
var fs=require("fs");
var content=JSON.parse(fs.readFileSync("config.json"));
var host=content.host;
var port=content.port;	

var mongo=require("mongodb");
var dbhost="127.0.0.1";
var dbport=mongo.Connection.DEFAULT_PORT;

var express=require("express");
var app=express();
//app.use(app.router);
app.use(express.static(__dirname));

app.get("/",function(request,response){
response.send("Hello");
});
app.get("/hello/:text",function(request,response){
response.send("Hello"+request.params.text);
});
app.get("/user/:id",function(request,response){

	getuser(request.params.id,function(user){
		if(!user){
		response.send("Hello  no users");
	}
	else{
		response.send("Hello  we have a user");
	}
	});	
});

app.listen(port,host);
function getuser(id,callback){



var db=new mongo.Db("nodejs-introduction",
new mongo.Server(dbhost,dbport,{}),{safe:false,strict:false});//name of the DB
db.open(function(error){
console.log("We ar connected"+dbhost+":"+dbport+error);
	db.collection("user",function(error,collection){
		console.log("We have the collection");
		collection.find({"id":id.toString()},function(error,cursor){
			cursor.toArray(function(error,users){
				if(users.length==0){
					callback(false);
				}
				else{
					callback(users[0]);
				}

			});
		});
	});	
});
}
