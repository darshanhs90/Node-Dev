var http=require('http');
var server=http.createServer();

function handler(request,res){
	if(request.url="/home"){
res.writeHead(200,{'Content-Type':'text/plain'});
res.write('Hello world');
res.end();
console.log(request.url);
//every req from browser has two reqs,one for favicon n other for data
}
};


server.on('request',handler);

server.listen(1337);