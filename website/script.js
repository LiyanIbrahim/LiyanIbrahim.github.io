// -------------------------------------PROJECTS PAGE-------------------------------------------------------------
// List of sentences
var _CONTENT = [ 
	"Interactive Websites", 
	"Physical Computing", 
	"Visual Langauge", 
	"Game Design", 
	"Interactive Installations"
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#typetext");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'inline-block';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);


//lovewar  
let warbefore=document.getElementById('war');
let warhover=document.getElementById('warhover');


warbefore.addEventListener('mouseenter', event =>{
	warhover.style.display="inline";
	warbefore.style.display="none";
})

warhover.addEventListener('mouseleave', event =>{
	warbefore.style.display="inline";
	warhover.style.display="none";
})

//songs  
let songbefore=document.getElementById('songs2');
let songhover=document.getElementById('songshover');


songbefore.addEventListener('mouseenter', event =>{
	songhover.style.display="inline";
	songbefore.style.display="none";
})

songhover.addEventListener('mouseleave', event =>{
	songbefore.style.display="inline";
	songhover.style.display="none";
})
//open gulf on hover 
let opengulf=document.getElementById("folder1");
let fold=document.getElementById("folder");
let backopen=document.getElementById("opengulf");

opengulf.addEventListener('mouseenter', event =>{
	backopen.style.display="inline";
	opengulf.style.display="none";

})

backopen.addEventListener('mouseleave', event =>{
	opengulf.style.display="inline";
	backopen.style.display="none";

})

//change image for opengulf 

 var image_tracker = 'opengulf1';
 
 
 function change(){
 // var image = document.getElementById('folder1');
 if(image_tracker=='opengulf1'){
 opengulf.src='opengulf2.png';
 image_tracker='opengulf2';
 }
 else if (image_tracker=='opengulf2'){
 opengulf.src='opengulf3.png';
 image_tracker='opengulf3';
 } 
 else{
 	opengulf.src='opengulf1.png';
 	image_tracker='opengulf1';
 }
 }

 var timer = setInterval('change();',1500); 



 // Performing Robots Hover 

 let prbefore=document.getElementById("pr");
 let prhover=document.getElementById("prHover");


prbefore.addEventListener('mouseenter', event =>{
	prhover.style.display="inline";
	prbefore.style.display="none";

})

prhover.addEventListener('mouseleave', event =>{
	prbefore.style.display="inline";
	prhover.style.display="none";
})

 // bloody mary hover

 let marybefore=document.getElementById("mary");
 let maryhover=document.getElementById("maryhover");


marybefore.addEventListener('mouseenter', event =>{
	maryhover.style.display="inline";
	marybefore.style.display="none";

})

maryhover.addEventListener('mouseleave', event =>{
	marybefore.style.display="inline";
	maryhover.style.display="none";
})
//expressive words 


 let vlbefore=document.getElementById("expressive");
 let vlhover=document.getElementById("expressivehover");


vlbefore.addEventListener('mouseenter', event =>{
	vlhover.style.display="inline";
	vlbefore.style.display="none";

})

vlhover.addEventListener('mouseleave', event =>{
	vlbefore.style.display="inline";
	vlhover.style.display="none";
})

// CB hover 
let cbbefore=document.getElementById('cb');
let cbhover=document.getElementById('cbHover');


cbbefore.addEventListener('mouseenter', event =>{
	cbhover.style.display="inline";
	cbbefore.style.display="none";
})

cbhover.addEventListener('mouseleave', event =>{
	cbbefore.style.display="inline";
	cbhover.style.display="none";
})

//comic hover
let comicbefore=document.getElementById('comic');
let comichover=document.getElementById('comicHover');


comicbefore.addEventListener('mouseenter', event =>{
	comichover.style.display="inline";
	comicbefore.style.display="none";
})

comichover.addEventListener('mouseleave', event =>{
	comicbefore.style.display="inline";
	comichover.style.display="none";
})


//sound hover 
let soundbefore=document.getElementById('sound');
let soundhover=document.getElementById('soundHover');


soundbefore.addEventListener('mouseenter', event =>{
	soundhover.style.display="inline";
	soundbefore.style.display="none";
})

soundhover.addEventListener('mouseleave', event =>{
	soundbefore.style.display="inline";
	soundhover.style.display="none";
})


//UIM hover 
let uimbefore=document.getElementById('uim1');
let uimhover=document.getElementById('uimHover');


uimbefore.addEventListener('mouseenter', event =>{
	uimhover.style.display="inline";
	uimbefore.style.display="none";
})

uimhover.addEventListener('mouseleave', event =>{
	uimbefore.style.display="inline";
	uimhover.style.display="none";
})
// changing images for UIM 

var image_tracker_uim = 'uim1';
 
 
 function changeUIM(){
 // var image = document.getElementById('folder1');
 if(image_tracker_uim=='uim1'){
 uimbefore.src='uim2.png';
 image_tracker_uim='uim2';
 }
 else if (image_tracker_uim=='uim2'){
 uimbefore.src='uim3.png';
 image_tracker_uim='uim3';
 } 
 else{
 	uimbefore.src='uim1.png';
 	image_tracker_uim='uim1';
 }
 }

 var timerUIM = setInterval('changeUIM();',2500); 

  //home 
let home=document.getElementById("home1");
let fliped1=document.getElementById("homehover");

home.addEventListener('mouseenter', event =>{
	fliped1.style.display="inline";
	home.style.display="none";

})

fliped1.addEventListener('mouseleave', event =>{
	home.style.display="inline";
	fliped1.style.display="none";

})
//let images rotate
var image_tracker2 = 'home1';
 
 function changeHome(){
 // var image = document.getElementById('folder1');
 if(image_tracker2=='home1'){
 home.src='home2.png';
 image_tracker2='home2';
 }
 else if (image_tracker2=='home2'){
 home.src='home3.png';
 image_tracker2='home3';
 } 
 else{
 	home.src='home1.png';
 	image_tracker2='home1';
 }
 }

 var timer3 = setInterval('changeHome();',1500); 

//delta  
let deltabefore=document.getElementById('delta');
let deltahover=document.getElementById('deltahover');


deltabefore.addEventListener('mouseenter', event =>{
	deltahover.style.display="inline";
	deltabefore.style.display="none";
})

deltahover.addEventListener('mouseleave', event =>{
	deltabefore.style.display="inline";
	deltahover.style.display="none";
})

//delta  
let frictionsbefore=document.getElementById('frictions');
let frictionshover=document.getElementById('frictionshover');


frictionsbefore.addEventListener('mouseenter', event =>{
	frictionshover.style.display="inline";
	frictionsbefore.style.display="none";
})

frictionshover.addEventListener('mouseleave', event =>{
	frictionsbefore.style.display="inline";
	frictionshover.style.display="none";
})

//video Hover

let vidbefore=document.getElementById('video');
let vidhover=document.getElementById('videoHover');


vidbefore.addEventListener('mouseenter', event =>{
	vidhover.style.display="inline";
	vidbefore.style.display="none";
})

vidhover.addEventListener('mouseleave', event =>{
	vidbefore.style.display="inline";
	vidhover.style.display="none";
})

//final hover 

let finalbefore=document.getElementById('final1');
let finalhover=document.getElementById('finalHover');


finalbefore.addEventListener('mouseenter', event =>{
	finalhover.style.display="inline";
	finalbefore.style.display="none";
})

finalhover.addEventListener('mouseleave', event =>{
	finalbefore.style.display="inline";
	finalhover.style.display="none";
})

//final moving images 
var image_tracker_final = 'final1';
 
 
 function changeFinal(){
 // var image = document.getElementById('folder1');
 if(image_tracker_final=='final1'){
 finalbefore.src='final2.png';
 image_tracker_final='final2';
 }
 else if (image_tracker_final=='final2'){
 finalbefore.src='final3.png';
 image_tracker_final='final3';
 } 
 else{
 	finalbefore.src='final1.png';
 	image_tracker_final='final1';
 }
 }

 var timerFinal = setInterval('changeFinal();',2000); 

//capstone 
let capstone=document.getElementById("capstone");
let foldwhat=document.getElementById("capstone");
let fliped=document.getElementById("capstonehover");

capstone.addEventListener('mouseenter', event =>{
	fliped.style.display="inline";
	capstone.style.display="none";

})

fliped.addEventListener('mouseleave', event =>{
	capstone.style.display="inline";
	fliped.style.display="none";

})
//let images rotate
var image_tracker1 = 'capstone1';
 
 function changeCap(){
 // var image = document.getElementById('folder1');
 if(image_tracker1=='capstone1'){
 capstone.src='capstone2.png';
 image_tracker1='capstone2';
 }
 else if (image_tracker1=='capstone2'){
 capstone.src='capstone3.png';
 image_tracker1='capstone3';
 } 
 else{
 	capstone.src='capstone1.png';
 	image_tracker1='capstone1';
 }
 }

 var timer1 = setInterval('changeCap();',1500); 



//censorship 
let censorbefore=document.getElementById('censorship');
let censorhover=document.getElementById('censorshiphover');


censorbefore.addEventListener('mouseenter', event =>{
	censorhover.style.display="inline";
	censorbefore.style.display="none";
})

censorhover.addEventListener('mouseleave', event =>{
	censorbefore.style.display="inline";
	censorhover.style.display="none";
})

//beyond 
let beyondbefore=document.getElementById('beyond');
let beyondhover=document.getElementById('beyondhover');


beyondbefore.addEventListener('mouseenter', event =>{
	beyondhover.style.display="inline";
	beyondbefore.style.display="none";
})

beyondhover.addEventListener('mouseleave', event =>{
	beyondbefore.style.display="inline";
	beyondhover.style.display="none";
})

//express  
let expressbefore=document.getElementById('express');
let expresshover=document.getElementById('expresshover');


expressbefore.addEventListener('mouseenter', event =>{
	expresshover.style.display="inline";
	expressbefore.style.display="none";
})

expresshover.addEventListener('mouseleave', event =>{
	expressbefore.style.display="inline";
	expresshover.style.display="none";
})


//typerwritter effect

// var i = 0;
// var txt = 'Lorem ipsum dummy text blabla.';
// var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("text").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
