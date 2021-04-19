//second page
//to switch bewteen steps
let iClickedStep1=document.getElementById("contentSTEP1");
let iClickedStep2=document.getElementById("contentSTEP2");
let iClickedStep3=document.getElementById("contentSTEP3");

let controlme1=0;

let showSTEP1=document.getElementById("myBar1");
let showSTEP2=document.getElementById("myBar2");
let showSTEP3=document.getElementById("myBar3");




showSTEP1.addEventListener('click', event=>{
	iClickedStep1.style.display = "inline";
	iClickedStep2.style.display = "none";
	iClickedStep3.style.display = "none";
	showSTEP2.style.backgroundColor = "white"
	showSTEP3.style.backgroundColor = "white"
	showSTEP1.style.backgroundColor = "#E889E7"
	showSTEP2.style.borderColor = "#EDA234"
	showSTEP3.style.borderColor = "#79A3E8"
	showSTEP1.style.borderColor = "black"
	showSTEP1.style.borderWidth = "medium"
	showSTEP2.style.borderWidth = "thin"
	showSTEP3.style.borderWidth = "thin"
	showSTEP2.style.color = "#EDA234"
	showSTEP3.style.color = "#79A3E8"
	showSTEP1.style.color = "white"
})
//
// showSTEP1.addEventListener('mouseenter', (event)=>{
// 	showSTEP1.style.backgroundColor = "#BB2AD3"
// })
// showSTEP1.addEventListener('mouseleave', (event)=>{
// 	showSTEP1.style.backgroundColor = "#EA99E9"
// })
//
// showSTEP2.addEventListener('mouseenter', event=>{
// 	showSTEP2.style.backgroundColor = "#D9712B"
// })
// showSTEP2.addEventListener('mouseleave', (event)=>{
// 	showSTEP2.style.backgroundColor = "#FFEC40"
// })
//
// showSTEP3.addEventListener('mouseenter', event=>{
// 	showSTEP3.style.backgroundColor = "#2159B0"
// })
// showSTEP3.addEventListener('mouseleave', (event)=>{
// 	showSTEP3.style.backgroundColor = "#6699E9"
// })


showSTEP2.addEventListener('click', event=>{
	iClickedStep1.style.display = "none";
	iClickedStep2.style.display = "inline";
	iClickedStep3.style.display = "none";
	controlme1++;
	showSTEP2.style.backgroundColor = "#EDA234"
	showSTEP3.style.backgroundColor = "white"
	showSTEP1.style.backgroundColor = "white"
	showSTEP2.style.borderColor = "black"
	showSTEP3.style.borderColor = "#79A3E8"
	showSTEP1.style.borderColor = "#E889E7"
	showSTEP2.style.color = "white"
	showSTEP3.style.color = "#79A3E8"
	showSTEP1.style.color = "#E889E7"
	showSTEP2.style.borderWidth = "medium"
	showSTEP1.style.borderWidth = "thin"
	showSTEP3.style.borderWidth = "thin"
	clearInterval(refreshIntervalId);
})

showSTEP3.addEventListener('click', event=>{
	iClickedStep1.style.display = "none";
	iClickedStep2.style.display = "none";
	iClickedStep3.style.display = "inline";
	clearInterval(refreshIntervalId);
	showSTEP2.style.backgroundColor = "white"
	showSTEP3.style.backgroundColor = "#79A3E8"
	showSTEP1.style.backgroundColor = "white"
	showSTEP2.style.borderColor = "#EDA234"
	showSTEP3.style.borderColor = "black"
	showSTEP1.style.borderColor = "#E889E7"
	showSTEP2.style.color = "#EDA234"
	showSTEP3.style.color = "white"
	showSTEP1.style.color = "#E889E7"
	showSTEP3.style.borderWidth = "medium"
	showSTEP2.style.borderWidth = "thin"
	showSTEP1.style.borderWidth = "thin"
})
//videos ending
let video1=document.getElementById("step1VIDEO");
let video2=document.getElementById("step2VIDEO");
let video3=document.getElementById("step3VIDEO");
//functions for blinking
var refreshIntervalId;

function blinker(element, duration)
{
       element.style.backgroundColor = "#ffffff";
       setTimeout(function(){  element.style.backgroundColor = "#808080";}, duration);
}
function stopBlinker(element){
	    element.style.backgroundColor = "#ffffff";
       setTimeout(function(){  element.style.backgroundColor = "#ffffff";}, duration);
}

//when the first step finshes, blink second tap until user presses
video1.onended = function() {
	refreshIntervalId =setInterval(function(){ blinker(showSTEP2, 1000) }, 700);

};

//when the second step finshes, blink third tap until user presses
video2.onended = function() {
    refreshIntervalId =setInterval(function(){ blinker(showSTEP3, 1000) }, 700);
};

//play and pause videos
//play videos
let play1=document.getElementById("playSTEP1");
let play2=document.getElementById("playSTEP2");
let play3=document.getElementById("playSTEP3");
let step1=document.getElementById("step1VIDEO");
	step1.muted= false;
let step2=document.getElementById("step2VIDEO");
let step3=document.getElementById("step3VIDEO");

play1.addEventListener('click',event=>{
	step1.play();

})

play2.addEventListener('click',event=>{
	step2.play();

})
play3.addEventListener('click',event=>{
	step3.play();

})

//pause videos
let pause1=document.getElementById("pauseSTEP1");
let pause2=document.getElementById("pauseSTEP2");
let pause3=document.getElementById("pauseSTEP3");

pause1.addEventListener('click',event=>{
	step1.pause();

})

pause2.addEventListener('click',event=>{
	step2.pause();

})
pause3.addEventListener('click',event=>{
	step3.pause();

})

//mute video
let mute1=document.getElementById("muteSTEP1");
let mute2=document.getElementById("muteSTEP2");
let mute3=document.getElementById("muteSTEP3");
let unmute1=0;
let unmute2=0;
let unmute3=0;

mute1.addEventListener('click',event=>{
	unmute1++;
	if(unmute1%2!=0){
		step1.muted= true;
	}else{
		step1.muted= false;
	}
})

mute2.addEventListener('click',event=>{
	unmute2++;
	if(unmute2%2!=0){
		step2.muted= true;
	}else{
		step2.muted= false;
	}

})
mute3.addEventListener('click',event=>{
	unmute3++;
	if(unmute3%2!=0){
		step3.muted= true;
	}else{
		step3.muted= false;
	}

})
