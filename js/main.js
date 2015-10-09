function getCurrentTime() {


//save  current time and date
var currentTime = new Date();

//console the date amd time
console.log(currentTime);


//save hours/mins/seconds
var h = currentTime.getHours();
var m = currentTime.getMinutes();
var s = currentTime.getSeconds();


if(h > 12) {
	h=h-12;
}
m =checkTime(m);
s =checkTime(s);

document.getElementById('time').innerHTML ='The current time is: ' +h + ':' +m + ':' +s ;

setTimeout(function() {
	getCurrentTime()
}, 1000);
}

function checkTime(i) {
	if(i < 10) {
		i = '0' + i;
		console.log('seconds are less than 10');
	} else {
		console.log('this check minutes didnt work');
	}

	return i;
}


//getCurrentTime();