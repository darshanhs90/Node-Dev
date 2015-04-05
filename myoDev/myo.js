var Myo = require('myo');

var myMyo = Myo.create();
console.log('asdasdas');
console.log(myMyo.isLocked)
myMyo.on('connected', function () {
    myo.setLockingPolicy('none');
    console.log('asdadasdasd');
});
myMyo.on('fist', function(edge){
	console.log('dasdasd');
    if(!edge) return;
    console.log('Hello Myo!');
    myMyo.vibrate();
});