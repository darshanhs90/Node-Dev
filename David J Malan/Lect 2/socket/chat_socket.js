var fs=require("fs"),
	express=require("express"),
	app=express();
var server=app.listen(1337);
var	io=require("socket.io").listen(server);
app.get('/',function(req,res){
	fs.createReadStream('index.html').pipe(res);
});

io.sockets.on('connection',function(client){
	clent.on('message:client',function(data){
		client.broadcast.emit('message:sever',{message:data.message});
	});
});
