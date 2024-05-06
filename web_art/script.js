 let soundtextbefore=document.getElementById("tile1");
 let soundtexthover=document.getElementById("tile2");
let soundimage=document.getElementById("sound");
let body= document.getElementById("body");
let backgroundGif=document.getElementById("gif");


let allcolors = ["blue", "green", "yellow", "red", "black", "white", "pink", "purple", "navy", "orange", "turquoise"]


soundimage.addEventListener('mouseenter', event =>{
	soundtexthover.style.display="inline";
	soundtextbefore.style.display="none";
	soundimage.src="unmute.png";
	backgroundGif.style.display="inline";


})

soundimage.addEventListener('mouseleave', event =>{
	soundtextbefore.style.display="inline";
	soundtexthover.style.display="none";
	soundimage.src="mute.png";
})


