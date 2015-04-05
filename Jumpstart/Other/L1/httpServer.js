var http=require("http");
http.createServer(function(req,res){
	if(req.url=='/')
		res.end("asdadsdddasd");
	else if(req.url=='/home')
		res.end("homeeeeee");
	
}).listen(3000);