//------------------------------------------------INDEX----------------------------------------------------------
//get id for all  
let opengindex=document.getElementById('ogIndex');

let prindex=document.getElementById('prIndex');
let ampindex=document.getElementById('ampIndex');
let comicindex=document.getElementById('comicIndex');
let soundindex=document.getElementById('soundIndex');
let uimindex=document.getElementById('uimIndex');
let vidindex=document.getElementById('vidIndex');
let finalindex=document.getElementById('finalIndex');

let mainpagecolor=document.getElementById('mainpage');

//opengulf 
opengindex.addEventListener('mouseenter', event =>{
	mainpagecolor.style.backgroundColor='#7d75b1';
	opengindex.style.fontSize='12vh';
	prindex.style.color='#CAA27E';
	ampindex.style.color='#CAA27E';
	comicindex.style.color='#CAA27E';
	soundindex.style.color='#CAA27E';
	uimindex.style.color='#CAA27E';
	vidindex.style.color='#CAA27E';
	finalindex.style.color='#CAA27E';

	prindex.style.opacity='50%';
	ampindex.style.opacity='50%';
	comicindex.style.opacity='50%';
	soundindex.style.opacity='50%';
	uimindex.style.opacity='50%';
	vidindex.style.opacity='50%';
	finalindex.style.opacity='50%';
	// finalbefore.style.display="none";
})
opengindex.addEventListener('mouseleave', event =>{
	mainpagecolor.style.backgroundColor='#000000';
	opengindex.style.fontSize='10vh';
	prindex.style.color='#FFFFFF';
	ampindex.style.color='#FFFFFF';
	comicindex.style.color='#FFFFFF';
	soundindex.style.color='#FFFFFF';
	uimindex.style.color='#FFFFFF';
	vidindex.style.color='#FFFFFF';
	finalindex.style.color='#FFFFFF';

	prindex.style.opacity='100%';
	ampindex.style.opacity='100%';
	comicindex.style.opacity='100%';
	soundindex.style.opacity='100%';
	uimindex.style.opacity='100%';
	vidindex.style.opacity='100%';
	finalindex.style.opacity='100%';
	// finalbefore.style.display="none";
})

// PR
prindex.addEventListener('mouseenter', event =>{
	mainpagecolor.style.backgroundColor='#d9d9d9';
	prindex.style.fontSize='12vh';
	// prindex.style.lineHeight='20px';
	prindex.style.color='#000000';
	opengindex.style.color='#008037';
	ampindex.style.color='#5e17eb';
	comicindex.style.color='#008037';
	soundindex.style.color='#5e17eb';
	uimindex.style.color='#008037';
	vidindex.style.color='#5e17eb';
	finalindex.style.color='#008037';

	opengindex.style.opacity='50%';
	ampindex.style.opacity='50%';
	comicindex.style.opacity='50%';
	soundindex.style.opacity='50%';
	uimindex.style.opacity='50%';
	vidindex.style.opacity='50%';
	finalindex.style.opacity='50%';
	// finalbefore.style.display="none";
})
prindex.addEventListener('mouseleave', event =>{
	mainpagecolor.style.backgroundColor='#000000';
	prindex.style.fontSize='10vh';
	opengindex.style.color='#FFFFFF';
	prindex.style.color='#FFFFFF';
	ampindex.style.color='#FFFFFF';
	comicindex.style.color='#FFFFFF';
	soundindex.style.color='#FFFFFF';
	uimindex.style.color='#FFFFFF';
	vidindex.style.color='#FFFFFF';
	finalindex.style.color='#FFFFFF';

	opengindex.style.opacity='100%';
	ampindex.style.opacity='100%';
	comicindex.style.opacity='100%';
	soundindex.style.opacity='100%';
	uimindex.style.opacity='100%';
	vidindex.style.opacity='100%';
	finalindex.style.opacity='100%';
	// finalbefore.style.display="none";
})

ampindex.addEventListener('mouseenter', event =>{
	mainpagecolor.style.backgroundColor='#ff7a2e';
	ampindex.style.fontSize='12vh';
	ampindex.style.color='#843b16'
	opengindex.style.color='#FFFFFF';
	prindex.style.color='#FFFFFF';
	comicindex.style.color='#FFFFFF';
	soundindex.style.color='#FFFFFF';
	uimindex.style.color='#FFFFFF';
	vidindex.style.color='#FFFFFF';
	finalindex.style.color='#FFFFFF';

	opengindex.style.opacity='50%';
	prindex.style.opacity='50%';
	comicindex.style.opacity='50%';
	soundindex.style.opacity='50%';
	uimindex.style.opacity='50%';
	vidindex.style.opacity='50%';
	finalindex.style.opacity='50%';
	// finalbefore.style.display="none";
})
ampindex.addEventListener('mouseleave', event =>{
	mainpagecolor.style.backgroundColor='#000000';
	ampindex.style.fontSize='10vh';
	opengindex.style.color='#FFFFFF';
	prindex.style.color='#FFFFFF';
	ampindex.style.color='#FFFFFF';
	comicindex.style.color='#FFFFFF';
	soundindex.style.color='#FFFFFF';
	uimindex.style.color='#FFFFFF';
	vidindex.style.color='#FFFFFF';
	finalindex.style.color='#FFFFFF';

	opengindex.style.opacity='100%';
	prindex.style.opacity='100%';
	comicindex.style.opacity='100%';
	soundindex.style.opacity='100%';
	uimindex.style.opacity='100%';
	vidindex.style.opacity='100%';
	finalindex.style.opacity='100%';
	// finalbefore.style.display="none";
})
comicindex.addEventListener('mouseenter', event =>{
	mainpagecolor.style.backgroundColor='#f2a2af';
	comicindex.style.fontSize='12vh';
	comicindex.style.color='#7d75b1'
	opengindex.style.color='#ffee74';
	prindex.style.color='#ffee74';
	soundindex.style.color='#ffee74';
	ampindex.style.color='#ffee74';
	uimindex.style.color='#ffee74';
	vidindex.style.color='#ffee74';
	finalindex.style.color='#ffee74';

	opengindex.style.opacity='50%';
	prindex.style.opacity='50%';
	soundindex.style.opacity='50%';
	ampindex.style.opacity='50%';
	uimindex.style.opacity='50%';
	vidindex.style.opacity='50%';
	finalindex.style.opacity='50%';
	// finalbefore.style.display="none";
})
comicindex.addEventListener('mouseleave', event =>{
	mainpagecolor.style.backgroundColor='#000000';
	comicindex.style.fontSize='10vh';
	comicindex.style.color='#FFFFFF';
	opengindex.style.color='#FFFFFF';
	prindex.style.color='#FFFFFF';
	ampindex.style.color='#FFFFFF';
	soundindex.style.color='#FFFFFF';
	ampindex.style.color='#FFFFFF';
	uimindex.style.color='#FFFFFF';
	vidindex.style.color='#FFFFFF';
	finalindex.style.color='#FFFFFF';

	opengindex.style.opacity='100%';
	prindex.style.opacity='100%';
	soundindex.style.opacity='100%';
	ampindex.style.opacity='100%';
	uimindex.style.opacity='100%';
	vidindex.style.opacity='100%';
	finalindex.style.opacity='100%';
	// finalbefore.style.display="none";
})

soundindex.addEventListener('mouseenter', event =>{
	mainpagecolor.style.backgroundColor='#896484';
	soundindex.style.fontSize='12vh';
	soundindex.style.color='#000000'
	opengindex.style.color='#f5deb3';
	prindex.style.color='#f5deb3';
	comicindex.style.color='#f5deb3';
	ampindex.style.color='#f5deb3';
	uimindex.style.color='#f5deb3';
	vidindex.style.color='#f5deb3';
	finalindex.style.color='#f5deb3';

	opengindex.style.opacity='50%';
	prindex.style.opacity='50%';
	comicindex.style.opacity='50%';
	ampindex.style.opacity='50%';
	uimindex.style.opacity='50%';
	vidindex.style.opacity='50%';
	finalindex.style.opacity='50%';
	// finalbefore.style.display="none";
})
soundindex.addEventListener('mouseleave', event =>{
	mainpagecolor.style.backgroundColor='#000000';
	soundindex.style.fontSize='10vh';
	soundindex.style.color='#FFFFFF';
	opengindex.style.color='#FFFFFF';
	prindex.style.color='#FFFFFF';
	ampindex.style.color='#FFFFFF';
	comicindex.style.color='#FFFFFF';
	ampindex.style.color='#FFFFFF';
	uimindex.style.color='#FFFFFF';
	vidindex.style.color='#FFFFFF';
	finalindex.style.color='#FFFFFF';

	opengindex.style.opacity='100%';
	prindex.style.opacity='100%';
	comicindex.style.opacity='100%';
	ampindex.style.opacity='100%';
	uimindex.style.opacity='100%';
	vidindex.style.opacity='100%';
	finalindex.style.opacity='100%';
	// finalbefore.style.display="none";
})

uimindex.addEventListener('mouseenter', event =>{
	mainpagecolor.style.backgroundColor='#a09889';
	uimindex.style.fontSize='12vh';
	uimindex.style.color='#e6a6cd'
	opengindex.style.color='#000000';
	prindex.style.color='#000000';
	comicindex.style.color='#000000';
	ampindex.style.color='#000000';
	soundindex.style.color='#000000';
	vidindex.style.color='#000000';
	finalindex.style.color='#000000';

	opengindex.style.opacity='50%';
	prindex.style.opacity='50%';
	comicindex.style.opacity='50%';
	ampindex.style.opacity='50%';
	soundindex.style.opacity='50%';
	vidindex.style.opacity='50%';
	finalindex.style.opacity='50%';
	// finalbefore.style.display="none";
})
uimindex.addEventListener('mouseleave', event =>{
	mainpagecolor.style.backgroundColor='#000000';
	uimindex.style.fontSize='10vh';
	uimindex.style.color='#FFFFFF';
	opengindex.style.color='#FFFFFF';
	prindex.style.color='#FFFFFF';
	ampindex.style.color='#FFFFFF';
	comicindex.style.color='#FFFFFF';
	ampindex.style.color='#FFFFFF';
	soundindex.style.color='#FFFFFF';
	vidindex.style.color='#FFFFFF';
	finalindex.style.color='#FFFFFF';

	opengindex.style.opacity='100%';
	prindex.style.opacity='100%';
	comicindex.style.opacity='100%';
	ampindex.style.opacity='100%';
	soundindex.style.opacity='100%';
	vidindex.style.opacity='100%';
	finalindex.style.opacity='100%';
	// finalbefore.style.display="none";
})

vidindex.addEventListener('mouseenter', event =>{
	mainpagecolor.style.backgroundColor='#FFFFFF';
	vidindex.style.fontSize='12vh';
	vidindex.style.color='#7aa3e8'
	opengindex.style.color='#e889e7';
	prindex.style.color='#eea234';
	comicindex.style.color='#eea234';
	ampindex.style.color='#e889e7';
	soundindex.style.color='#e889e7';
	uimindex.style.color='#eea234';
	finalindex.style.color='#e889e7';

	opengindex.style.opacity='50%';
	prindex.style.opacity='50%';
	comicindex.style.opacity='50%';
	ampindex.style.opacity='50%';
	soundindex.style.opacity='50%';
	uimindex.style.opacity='50%';
	finalindex.style.opacity='50%';
	// finalbefore.style.display="none";
})
vidindex.addEventListener('mouseleave', event =>{
	mainpagecolor.style.backgroundColor='#000000';
	vidindex.style.fontSize='10vh';
	vidindex.style.color='#FFFFFF';
	opengindex.style.color='#FFFFFF';
	prindex.style.color='#FFFFFF';
	ampindex.style.color='#FFFFFF';
	comicindex.style.color='#FFFFFF';
	ampindex.style.color='#FFFFFF';
	soundindex.style.color='#FFFFFF';
	uimindex.style.color='#FFFFFF';
	finalindex.style.color='#FFFFFF';

	opengindex.style.opacity='100%';
	prindex.style.opacity='100%';
	comicindex.style.opacity='100%';
	ampindex.style.opacity='100%';
	soundindex.style.opacity='100%';
	uimindex.style.opacity='100%';
	finalindex.style.opacity='100%';
	// finalbefore.style.display="none";
})

finalindex.addEventListener('mouseenter', event =>{
	mainpagecolor.style.backgroundColor='#d9d9d9';
	finalindex.style.fontSize='12vh';
	finalindex.style.color='#008037'
	opengindex.style.color='#ff6412';
	prindex.style.color='#ff6412';
	comicindex.style.color='#ff6412';
	ampindex.style.color='#ff6412';
	soundindex.style.color='#ff6412';
	uimindex.style.color='#ff6412';
	vidindex.style.color='#ff6412';

	opengindex.style.opacity='50%';
	prindex.style.opacity='50%';
	comicindex.style.opacity='50%';
	ampindex.style.opacity='50%';
	soundindex.style.opacity='50%';
	uimindex.style.opacity='50%';
	vidindex.style.opacity='50%';
	// finalbefore.style.display="none";
})
finalindex.addEventListener('mouseleave', event =>{
	mainpagecolor.style.backgroundColor='#000000';
	finalindex.style.fontSize='10vh';
	finalindex.style.color='#FFFFFF';
	opengindex.style.color='#FFFFFF';
	prindex.style.color='#FFFFFF';
	ampindex.style.color='#FFFFFF';
	comicindex.style.color='#FFFFFF';
	ampindex.style.color='#FFFFFF';
	soundindex.style.color='#FFFFFF';
	uimindex.style.color='#FFFFFF';
	vidindex.style.color='#FFFFFF';

	opengindex.style.opacity='100%';
	prindex.style.opacity='100%';
	comicindex.style.opacity='100%';
	ampindex.style.opacity='100%';
	soundindex.style.opacity='100%';
	uimindex.style.opacity='100%';
	vidindex.style.opacity='100%';
	// finalbefore.style.display="none";
})




// The place I saw this effect:
// https://angle2.agency/

// Red Staper made a NICE tutorial about this effect! You should check it out!
// https://www.youtube.com/watch?v=LgiadQQM6mo&t=5s

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width/2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
  width = window.innerWidth;
}

let scroll=document.getElementById('scrolldown');
// let github=document.getElementById('github');
// let s=scroll.getClientRects();
// let g=github.getClientRects();

// var overlap = !(rect1.right < rect2.left || 
//                 rect1.left > rect2.right || 
//                 rect1.bottom < rect2.top || 
//                 rect1.top > rect2.bottom);
// if(overlap==true){
//    scroll.style.display="none";
// }

// window.onscroll = function(ev) {
//     if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
//         alert("you're at the bottom of the page");
//         scroll.style.display="none";
//     }
// };