// This javascript file manipulates the further.html file 

let transTEXT= 'Video transitions are classified as a post-production technique used to increase smoothness and quality of film regardless of the quality of production. They are used to join two shots together and there are multiple different transitions that can be used which helps set the mood for the storyline. Transitions have also recently become more widespread with the rapid increase in popularity of TikTok where many cool, unconventional transitions and video editing styles started to emerge.';
let TEXTFOR20='Twenty questions is a spoken parlor game, which encourages deductive reasoning and creativity. It is commonly played between people who are bored and want to kill time or people who want to get to know unconventional facts about each other. A famous take on this game involves Vogues 73 questions in which it was filmed in a single shot, some of our favorite personalities are challenged to answer 73 rapid-fire questions.  ';



let hover1="Click me to read more about these awesome transitions!!";
let hover2="Click me to read more about the 20 questions game";
let hover3="Click to play it yourself";

let c = document.getElementById("trans");
let q=document.getElementById("20q");
let p=document.getElementById("play");
let tr=document.getElementById("meetteamm");

let v=0;
let v2=0;
let v3=0;

let click1=0;
let click2=0;
let click3=0;

console.log(c);


c.addEventListener('mouseenter' , event =>{
	v=0;
	if(click1%2==0){
	c.style.color="#4E5340";
	document.getElementById("ref").innerText =hover1;
	v=0;}
})

q.addEventListener('mouseenter' , event =>{
	v2=0;
	if(click2%2==0){
		q.style.color="#4E5340";
		document.getElementById("20qref").innerText =hover2;
		v2=0;}

	
})




c.addEventListener('mouseleave' , event =>{
	if(v==0){

	document.getElementById("ref").innerText =" ";
	console.log("hi im leaving");
	// c.style.color="orange";
	c.style.color="black";}
})

q.addEventListener('mouseleave' , event =>{
	if(v2==0){
	document.getElementById("20qref").innerText = "";
	 q.style.color="black";}
})




c.addEventListener('click' , event =>{
	click1++;
	v++;
	if(click1%2!=0){
	document.getElementById("ref").innerText =transTEXT;
	} else if(click1%2==0){
		v=0;
		document.getElementById("ref").innerText =" ";
	}

})

q.addEventListener('click' , event =>{
	click2++;
	v2++;
	if(click2%2!=0){
	document.getElementById("20qref").innerText =TEXTFOR20;
	} else if(click2%2==0){
		v2=0;
		document.getElementById("20qref").innerText =" ";

	}

})



i1.addEventListener('click', event =>{
	console.log("hello");
})





