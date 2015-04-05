var net=require("net");
var client=new net.Socket();
client.connect(1337,"127.0.0.1");
client.on('data',function(data){
	console.log("Data is "+data);
	console.log("Data");
	client.destroy();
});
client.on('end',function(){
	console.log("connection ended");
});