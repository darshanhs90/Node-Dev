var https=require("https");
var username='darshanhs90';
function getRepos(username,callback){
var options={
host:'api.github.com',
path:'/users/'+username+'/repos',
headers: {'user-agent': 'node.js'},
method:'GET'
};
//ajslds
var request=https.request(options,function(response){
	var body='';
	response.on("data",function(chunk){
		body+=chunk.toString('utf8');
	});
	response.on("end",function(){
		var repos=[];
		var json=JSON.parse(body);
		json.forEach(function(repo){
			repos.push({
				name:repo.name,
				description:repo.description
			});
		});
/*		console.log("Count: ",json.length);
		console.log("Repos: ",repos);*/
		callback(repos);
		//console.log("Body: ",body);
	});
});
request.end();
}
/*getRepos("darshanhs90",function(repos){

	console.log("I have "+repos.length+" repos");
})*/

module.exports.getRepos=getRepos;