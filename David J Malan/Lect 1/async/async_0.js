var fs=require("fs"),
	http=require("http");
http.createServer(function(req,res){
	var file='.'+req.url;
	fs.readFile(file,function(err,data){
		if(err)
			{
			res.writeHead(600,{'Content-type':'text/plain'});
			res.write("error");
			res.end();
			console.log("error",err.message);
		}
		else{
			res.writeHead(200,{'Content-type':'text/plain'});
			res.write(data);
			res.end();
			console.log("else",data);
		}
	})



}).listen(1337);