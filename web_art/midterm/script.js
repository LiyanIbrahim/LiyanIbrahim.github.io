var i = 0;
var txt = 'They fettered his mouth with chains, And tied his hands to the rock of the dead. They said: Youre a murderer. They took his food, his clothes and his banners, And threw him into the well of the dead. They said: Youre a thief. They threw him out of every port, And took away his young beloved.'; /* The text */
var speed = 80; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// display text after timer 

let textDisplay=document.getElementById("intro2");
var time= 27000;

setTimeout(function() {
  // Change the text here
  textDisplay.style.display="inline";
  }, time);
