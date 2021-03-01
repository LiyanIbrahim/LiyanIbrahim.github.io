AOS.init();

// Panel 1 Interactivity
let iclicked=0;
let p1CLICK=document.getElementById("first");
let audio1=document.getElementById("audio");

p1CLICK.addEventListener('click', event =>{
	iclicked++;
	p1CLICK.src='p1_click.gif';
	audio1.play();
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

//panel 2 Interactivity
let p2Clicked=document.getElementById("panel2B");
let p2Image=document.getElementById("p2I")
p2Clicked.addEventListener('click', event =>{
	p2I.src='p2_click_to shop.gif';
})
//panel 3 Interactivity
let audio3=document.getElementById("audio3");
let audioAdd=document.getElementById("audioadd");
let nofClicks=0;
let p3CLICK=document.getElementById("mix");
let p3Button=document.getElementById("panel3button");

//functions used for the timer
function play2nd(){
	p3CLICK.src='p3_hover2.gif';
	p3Button.innerText="Sugar";
}
function play3(){
	p3CLICK.src='p3_hover3.gif';
	p3Button.innerText="Flour";
}
function play4(){
	p3CLICK.src='p3_hover4.gif';
	p3Button.innerText="Baking Soda";
}
function play5(){
	p3CLICK.src='p3_hover5.gif';
	p3Button.innerText="Eggs";
}
function play6(){
	p3CLICK.src='p3_hover6.gif';
	p3Button.innerText="Mix";
}


p3Button.addEventListener('click', event =>{
	nofClicks++;
	if(nofClicks==1){
		p3CLICK.src='p3_click1.gif';
		audioAdd.play();
		setTimeout(play2nd,5000);

	}
	if(nofClicks==2){
		p3CLICK.src='p3_click2.gif';
		
		setTimeout(play3,5000);
	}
	if(nofClicks==3){
		p3CLICK.src='p3_click3.gif';
		
		setTimeout(play4,5000);
	}
	if(nofClicks==4){

		p3CLICK.src='p3_click4.gif';
		
		setTimeout(play5,5000);
	}
	if(nofClicks==5){
		p3CLICK.src='p3_click5.gif';
		setTimeout(play6,5000);
	}
	if(nofClicks==6){
		audioAdd.pause();
		p3CLICK.src='p3_click6.gif';
		audio3.play();

	}
})

p3Button.addEventListener('mouseenter' , event =>{
	audioAdd.pause();
	audio3.pause();
	if(nofClicks==0)
	{	audioAdd.play();
		p3CLICK.src='p3_hover1.gif';
		p3Button.innerText="Butter";

	}
	if(nofClicks==1){
		play2nd();
	}
	if(nofClicks==2){
		play3();
	}
	if(nofClicks==3){
		play4();
	}
	if(nofClicks==4){
		play5();
	}
	if(nofClicks==5){
		play6();
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


//panel 4 Interactivity
let iclicked2=0;
// choice variable correspond to either nuts or choco cookies
let choice=1;
let p4CLICK=document.getElementById("choice");
let p4ChocoButton=document.getElementById("p4chocobutton");
let p4NutsButton=document.getElementById("p4nutsbutton");

p4ChocoButton.addEventListener('click', event =>{
	iclicked2++;
	choice=1;
	p4CLICK.src='p4_click_choco.gif';
})

p4NutsButton.addEventListener('click', event =>{
	iclicked2++;
	choice=2;
	p4CLICK.src='p4_click_nut.gif';
})

//panel 5 Interactivity
let nofClicks2=0;
let p5CLICK=document.getElementById("bake");
let p5Button=document.getElementById("p5button");
p5Button.style.background='#92BDE3';

p5Button.addEventListener('click', event =>{
  nofClicks2++;
	if(nofClicks2==1){
		if(choice==1){
			p5CLICK.src='p5_1_click_choco.svg';
		}
		if(choice==2){
			p5CLICK.src='p5_1_click_nuts-01.svg';
		}
		p5Button.innerText="Preheat";
		p5Button.style.background='#5C9DD6';
	}
	if(nofClicks2==2){
		p5CLICK.src='p5_2_hover.gif';
		p5Button.innerText="Bake";
		p5Button.style.background='#317FC4';

	}
	if(nofClicks2==3){
		p5CLICK.src='p5_3_click.svg'
	}
})

  p5Button.addEventListener('mouseenter' , event =>{
  	if(nofClicks2==0)
  	{
  		p5Button.innerText="Add batter";
  	}
  	if(nofClicks2==1){
  		p5CLICK.src='p5_2_hover.gif';
  	}
  	if(nofClicks2==2){
  		p5CLICK.src='p5_3_hover.svg';
  	}
  })

  p5Button.addEventListener('mouseleave' , event =>{
  	if(nofClicks2==0){
  		p5CLICK.src='p5_1_still.svg';
  	}
  	if(nofClicks2==1){
  		p5CLICK.src='p5_2_still.svg';
  	}
  	if(nofClicks2==2){
  		p5CLICK.src='p5_3_still-01.svg';
  	}
  })