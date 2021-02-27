AOS.init();

// Panel 1 Interactivity
let iclicked=0;
let p1CLICK=document.getElementById("first");

p1CLICK.addEventListener('click', event =>{
	iclicked++;
	p1CLICK.src='p1_click.gif';
})

p1CLICK.addEventListener('mouseenter' , event =>{
	if(iclicked==0)
	{
		p1CLICK.src='p1_hover.gif';
	}
	
})

p1CLICK.addEventListener('mouseleave' , event =>{
	if(iclicked==0){
		p1CLICK.src='p1_still.svg';
	}
	}) 

//panel 3 Interactivity 
let nofClicks=0;
let p3CLICK=document.getElementById("mix");
let p3Button=document.getElementById("panel3button");

p3Button.addEventListener('click', event =>{
	nofClicks++;
	if(nofClicks==1){
		p3CLICK.src='p3_click1.gif';

	}
	if(nofClicks==2){
		p3CLICK.src='p3_click2.gif';

	}
	if(nofClicks==3){
		p3CLICK.src='p3_click3.gif'
	}
	if(nofClicks==4){

		p3CLICK.src='p3_click4.gif'
	}
	if(nofClicks==5){
		p3CLICK.src='p3_click5.gif'
	}
	if(nofClicks==6){

		p3CLICK.src='p3_click6.gif'
	}
})

p3Button.addEventListener('mouseenter' , event =>{
	if(nofClicks==0)
	{
		p3CLICK.src='p3_hover1.gif';
		p3Button.innerText="Butter";
	}
	if(nofClicks==1){
		p3CLICK.src='p3_hover2.gif';
		p3Button.innerText="Sugar";
	}
	if(nofClicks==2){
		p3CLICK.src='p3_hover3.gif';
		p3Button.innerText="Flour";
	}
	if(nofClicks==3){
		p3CLICK.src='p3_hover4.gif';
		p3Button.innerText="Baking Soda";
	}
	if(nofClicks==4){
		p3CLICK.src='p3_hover5.gif';
		p3Button.innerText="Eggs";
	}
	if(nofClicks==5){
		p3CLICK.src='p3_hover6.gif';
		p3Button.innerText="Mix";
	}
	
})
p3Button.addEventListener('mouseleave' , event =>{
	if(nofClicks==0){
		p3CLICK.src='p3_still-01.svg';
	}
	// if(nofClicks==1){
	// 	p3CLICK.src='p3_click1.gif';
	// }
	// if(nofClicks==2){
	// 	p3CLICK.src='p3_click2.gif';
	// }

	})
 