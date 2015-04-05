var http=require("http");
http.createServer(function(req,res){
	console.log(req.url);
	res.writeHead('200','Content-type:text/plain');
	res.write('Hello');
	res.end();
}).listen(1337);