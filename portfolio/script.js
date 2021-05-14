let aboutFolder=document.getElementById("about"); 
let trashFolder=document.getElementById("trash");

let aboutExp=document.getElementById("aboutExp"); 
let trashExp=document.getElementById("trashExp");

aboutFolder.addEventListener('click', event=>{
	aboutExp.style.display = "inline";

})

trashFolder.addEventListener('click', event=>{
	trashExp.style.display = "inline";

})

//close the about page 
let close=document.getElementById("close");

close.addEventListener('click', event =>{
	aboutExp.style.display = "none";
})

//close the trash page 
let closeTrash=document.getElementById("closeTrash");

closeTrash.addEventListener('click', event =>{
	trashExp.style.display = "none";
})

//welcome text triggered on click 
let welcome=document.getElementById("welcomeText");
let welcomeExp=document.getElementById("welcomeExp")
welcome.addEventListener('click', event =>{
	welcomeExp.style.display="inline";
	welcome.style.display="none";
})

//close welcome section when you click the x
let closeWelcome=document.getElementById("closeWelcome");
closeWelcome.addEventListener('click', event => {
	welcomeExp.style.display="none";
	welcome.style.display="inline";
})

//time  
  function time(){
    var date = new Date();    
    var time = date.toLocaleTimeString();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var day = date.toLocaleDateString('en-US',options);
    document.getElementById('time').innerHTML = time;
    document.getElementById('day').innerHTML = day;
  }
  setInterval(function(){
    time();
  },1000);


 //typing effect taken and adpated from https://usefulangle.com/post/75/typing-effect-animation-javascript-css

// List of Hellos to iterate through 
var _CONTENT = [ 
	"hello",
	"Marhaba", 
	"Bonjour", 
	"Hola", 
	"Zdravstvuyte", 
	"Nǐn hǎo",
	"Konnichiwa", 
	"Olá",
	"Shikamoo",
	"Dzień dobry",	
	"Namaste"

];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text2");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);


