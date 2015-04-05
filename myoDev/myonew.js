var Myo = require('myo');
var myMyo = Myo.create();
console.log(myMyo.isLocked)
myMyo.on('connected', function () {
    myo.setLockingPolicy('none');
});
vat str='';
var option=1;
var flag=false;
myMyo.on('pose', function(pos, edge){
    if(pos=='double_tap')
    {
    	Console.log("Your text is :");
    	str='';
    }
    else if(pos=='fingers_spread'){
    	//check for option
    	flag=true;
    }
    else if((pos!='fist' && pos!='rest')||flag==true){
    	if(flag!=true){
    	if(pos=='wave_in'){
    		count=count-1;
    	}
    	else{
    		count=count+1;
    	}
    	if(option==1)
    		count=count%26;
    	}
    	else{
    		if(pos=='wave_in'){
    		option=option-1;
    	}
    	else{
    		option=option+1;
    	}
    	option=option%2;
    	}

    }
    if(pos=='fist' && flag==true)
    	flag=false;
	if(pos=='fist' && flag==false){
		if(option==1)
    		str=str+'a'+count;
		if(option==2)
    		str=str+'-'+count;
		console.log(str);	
	}



});