var fs=require("fs"),
	http=require("http"),
	path=require("path");
http.createServer(function(req,res){
	var file=path.join('.',req.url);
	fs.stat(file,function(err,stats){
		if(err)
			{
			res.writeHead(500,{'Content-type':'text/plain'});
			res.write("error");
			res.end();
			console.log("error",err.message);
			return;
		}
		if(!stats.isFile()){
			res.writeHead(404,{'Content-type':'text/plain'});
			res.write("Not a file");
			res.end();
			console.log("stats",data);
		}
		else
		{
			res.writeHead(200,{'Content-type':'text/plain'});
			fs.readFile(file,function(err,data){
				console.log("is file",data);
				res.write(data);
				res.end();
			});
		}
	});



}).listen(1337);