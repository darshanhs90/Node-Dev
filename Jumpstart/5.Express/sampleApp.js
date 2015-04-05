var express=require('express');
var app=express();
app.get('/',function(req,res){
		//res.json({message:'Welcome!'});
		res.writeHead('200','Content-type:text/plain');
		res.write('Welcomeee!');
		res.end();
	});

app.get('/home',function(req,res){
		//res.json({message:'Welcome!'});
		res.writeHead('200','Content-type:text/plain');
		res.write('Homeee!');
		res.end();
	});




app.listen(1337);