var fs=require("fs"),
	http=require("http"),
	path=require("path"),
	async=require("async"),
	_=require("underscore");
http.createServer(function(req,res){
var p=path.join('.',req.url);
async.series([
	function(callback){
		fs.stat(p,function(err,stats){
			if(err){
				return callback(err);
			}
			if(!stats.isFile()){
				return callback(new Error("Not a file Error"));
			}
			else{
				return callback(null,stats);
			}
		});
	},
	function(callback){
		fs.readFile(p,function(err,data){
			if(err){
				return callback(err);
			}
			else{
				return callback(null,data.toString());
			}
		});
	}],
	function(err,results){
		if(err){
			res.writeHead(500);
			res.end(err.message);
		}
		else{
			res.writeHead(200);
			res.end(_.last(results));
		}
	});
}).listen(1337);