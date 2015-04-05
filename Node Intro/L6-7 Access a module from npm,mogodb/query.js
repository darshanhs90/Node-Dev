var mongo=require("mongodb");
var host="127.0.0.1";
var port=mongo.Connection.DEFAULT_PORT;

function getuser(id,callback){



var db=new mongo.Db("nodejs-introduction",
new mongo.Server(host,port,{}),{safe:false,strict:false});//name of the DB
db.open(function(error){
console.log("We ar connected"+host+":"+port+error);
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
getuser(1,function(user){
	if(!user){
		console.log("No user found");
	}
	else{
		console.log("We have a user",user)
	}
})
