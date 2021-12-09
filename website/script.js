// -------------------------------------PROJECTS PAGE-------------------------------------------------------------
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




