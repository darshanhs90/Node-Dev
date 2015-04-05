/*var myModule=require("./my_module");
console.log("Hello",myModule.hello());
console.log("Hello",myModule.helloAgain());
*/
var github=require("./github.js");
github.getRepos("darshanhs90",function(repos){
	console.log(repos.length);
});