
let x=1;
let play=document.getElementById("play");
let audio=document.getElementById("audio");
play.addEventListener('onclick', event =>{
	x++;
	if(x%2==0){
			audio.play();
	}
	else {
		audio.pause();
	}
})