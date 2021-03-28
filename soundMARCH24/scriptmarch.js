
let synth = new Tone.Synth().toMaster();

document.body.addEventListener('keypress', (event) => {
  if(event.key == 'w'){
    synth.triggerAttackRelease('C3', '4n')
    document.body.style.backgroundColor = "orange";
  }else if(event.key == 'e'){
    synth.triggerAttackRelease('C4', '4n')
    document.body.style.backgroundColor = "cyan";
  }else if(event.key == 'r'){
    synth.triggerAttackRelease('C5', '4n')
    document.body.style.backgroundColor = "pink";
  }
})

let interactable= document.getElementById("interactable")
let player= document.getElementById("player")
let filler=document.getElementById("filler")

interactable.addEventListener('mouseenter',()=>{
	player.play();
	interactable.style.color = "white";
	interactable.innerText="Hover away from me to pause";


})
interactable.addEventListener('mouseleave',()=>{
	player.pause();
	interactable.innerText="Hover over me to play";
	interactable.style.color = "black";

})

player.addEventListener('pause', () => {
  document.body.style.backgroundColor = "white";
})

player.addEventListener('play', () => {
  document.body.style.backgroundColor = "black";
})


filler.addEventListener('click',event =>{
	filler.innerText=" ";
	interactable.innerText="Hover over me to play";
	filler.style.borderColor = "black";

})


