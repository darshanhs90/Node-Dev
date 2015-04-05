var net=require("net");
net.createServer(function(socket){
	socket.on('data',function(data){
		//console.log("data rxd is :"+data);
		socket.write("Server reply is"+data);
		console.log("Server sending data");
	});
	socket.on('end',function(){
		console.log("Server disconnected");
	});
}).listen(3000,"127.0.0.1",function(err,data){
	if(!err)
		console.log("Listening");
	else
		console.log(err.message());
});