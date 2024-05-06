//second page 
var i = 0;
var txt = 'but i dont know any songs '; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("tile4").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF3357", "#33B5FF"];
function setRandomBackgroundColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}
let title1=document.getElementById("tile3");
let song1=document.getElementById("song1");
let song2=document.getElementById("song2");
let song3=document.getElementById("song3");
let song4=document.getElementById("song4");
let song5=document.getElementById("song5");

title1.addEventListener('click', event =>{
typeWriter();
title1.style.opacity="50%";
setTimeout(() => {
    song1.style.display = "inline";
  }, 4000);
})

song1.addEventListener('click', event =>{

song2.style.display="inline";
setRandomBackgroundColor();
})
song2.addEventListener('click', event =>{

song3.style.display="inline";
setRandomBackgroundColor();
})

song3.addEventListener('click', event =>{

song4.style.display="inline";
setRandomBackgroundColor();
})
song4.addEventListener('click', event =>{

song5.style.display="inline";
setRandomBackgroundColor();
})
