let imagesong=document.getElementById("a1");
let warning=document.getElementById("warning");
let audio= document.getElementById("playaudio");
let play=document.getElementById("play");
let pause=document.getElementById("pause");
let mute= document.getElementById("mute");
var cnt=1;
var cnt2=1;

imagesong.addEventListener('mouseenter', event => {
	imagesong.style.display="none";
	warning.style.display="inline";
	document.body.style.background="#A30000";
	audio.style.display="inline";
	play.style.display="inline";
	
})
play.addEventListener('click', event =>{
	mute.style.display="inline";
	cnt++;
	if(cnt%2==0){
			audio.play();
	play.src="play.png";
	}else{
	audio.pause();
	play.src="pause.png";
	}
})
mute.addEventListener('click', event =>{
	cnt2++;
	if(cnt2%2==0){
		audio.volume=0;
		mute.src="mute.png";
	} else{
		audio.volume=1;
		mute.src="unmute.png";
	}

})

warning.addEventListener('mouseleave', event=>{
	warning.style.display="none";
	imagesong.style.display="inline";
	document.body.style.background="#8FA01F";
})