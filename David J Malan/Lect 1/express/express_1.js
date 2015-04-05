var express=require("express");
var app=express();
app.listen(1337);
app.get("/*",function(req,res){
	console.log(req.url);
	res.status(200).send("dhello world");
});