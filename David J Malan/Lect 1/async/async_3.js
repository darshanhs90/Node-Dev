var fs=require("fs"),
	http=require("http"),
	path=require("path"),
	async=require("async"),
	_=require("underscore");
http.createServer(function(req,res){
var p=path.join('.',req.url);
async.waterfall([
	function(callback){
			fs.stat(p,callback);
	},
	function(stats,callback){
			if(!stats.isFile()){
				var e=new Error("Not a file Error");
				e.code=403;
				return callback(e);
			}
			callback(null);
	},
	function(callback){
			fs.readFile(p,callback);
	}],
	function callback(err,result)
	{
		if(!err){
			res.writeHead(err.code||400);
			res.end(err.message);
		}
		else{
			res.end(result);
		}
	}); 
}).listen(1337);