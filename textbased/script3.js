let text=document.getElementById("text6p");


//function for typing effect 
var i = 0;
var txt = 'why am I longing for a homeland?';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

}
//display image 
function dis(){
	document.getElementById("image").style.display="inline";
}
//activate on click 

text.addEventListener('click', event=>{
	typeWriter();
	dis();
})