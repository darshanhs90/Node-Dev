var net=require("net");
net.createServer(function(socket){
console.log("Hello"+socket.remoteAddress);
socket.write("asdasd");
socket.end();


}).listen(1337,"127.0.0.1",function(){
	console.log("Started Listening");
});