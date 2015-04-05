var mongo=require("mongodb");
var host="127.0.0.1";
var port=mongo.Connection.DEFAULT_PORT;
var db=new mongo.Db("nodejs-introduction",
new mongo.Server(host,port,{}),{safe:false,strict:false});//name of the DB
db.open(function(error){
console.log("We ar connected"+host+":"+port+error);
	db.collection("user",function(error,collection){
		console.log("We have the collection");
		collection.insert({
			id:"1",
			name:"darshanhs",
			twitter:"asdasd",
			email:"asd@asd.com"
		},function(){
			console.log("Successfully inserted darshanhs");
		});
		collection.insert({
			id:"2",
			name:"second person",
			twitter:"seocnd",
			email:"sec@sec.com"
		},function(){
			console.log("Successfully inserted second person");
		});
	});	
});
