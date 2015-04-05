var express=require("express"),
	fs=require("fs"),
	app=express(),
	server=app.listen(1337),
	io=require('socket.io').listen(server);

app.get('/',function(req,res){
	var stream=fs.createReadStream('./index.html');
	console.log(req.url);
	stream.on('error',function(err){
		res.status(400).json({error:err.message});
	});
	stream.pipe(res);
});

io.sockets.on('connection',function(client){
	setInterval(function(){
		client.emit('from_server',{message:'Ping'+new Date()});
	},5000);
});
