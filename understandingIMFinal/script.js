// List of sentences
var _CONTENT = [ 
	"masks ", 
	"powerless", 
	"surveilence", 
	"annonymous"
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

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





//------------------------------------move between art pairs------------------------------------
let arrow= document.getElementById("nextsec"); 
let arrowBack=document.getElementById("prevsec");
let pair11=document.getElementById("art1");
let pair21=document.getElementById("art3");
let pair31=document.getElementById("art5");
let pair41=document.getElementById("art7");
let pair51=document.getElementById("art9");

let pair12=document.getElementById("art2");
let pair22=document.getElementById("art4");
let pair32=document.getElementById("art6");
let pair42=document.getElementById("art8");
let pair52=document.getElementById("art10");
let title=document.getElementById("title1");

let pair=1;

let back=1;

arrow.addEventListener('click', event => {
	pair++;
	// start();
	if(pair==2 ){
		// _INTERVAL_VAL2 = setInterval(Type2, 100);
		pair11.style.display="none";
		pair21.style.display="inline";
		pair31.style.display="none";
		pair41.style.display="none";
		pair51.style.display="none";
		pair12.style.display="none";
		pair22.style.display="inline";
		pair32.style.display="none";
		pair42.style.display="none";
		pair52.style.display="none";
		_CONTENT = [ 
	"hi ", 
	"please", 
	"work", 
	"hello"
];

	}
	if(pair==3 ){
		pair11.style.display="none";
		pair21.style.display="none";
		pair31.style.display="inline";
		pair41.style.display="none";
		pair51.style.display="none";
		pair12.style.display="none";
		pair22.style.display="none";
		pair32.style.display="inline";
		pair42.style.display="none";
		pair52.style.display="none";
						_CONTENT = [ 
	"liyan ", 
	"liyan", 
	"liyan", 
	"liyan"
];
	}
	if(pair==4 ){
		pair11.style.display="none";
		pair21.style.display="none";
		pair31.style.display="none";
		pair41.style.display="inline";
		pair51.style.display="none";
		pair12.style.display="none";
		pair22.style.display="none";
		pair32.style.display="none";
		pair42.style.display="inline";
		pair52.style.display="none";
								_CONTENT = [ 
	"after ", 
	"after", 
	"after", 
	"after"
];

	}
	if(pair==5 ){
		pair11.style.display="none";
		pair21.style.display="none";
		pair31.style.display="none";
		pair41.style.display="none";
		pair51.style.display="inline";
		pair12.style.display="none";
		pair22.style.display="none";
		pair32.style.display="none";
		pair42.style.display="none";
		pair52.style.display="inline";
				_CONTENT = [ 
	"IM ", 
	"IM", 
	"IM", 
	"IM"
];
	}
})



arrowBack.addEventListener('click', event =>{
	pair--;
	if(pair==1){
		 _CONTENT = [ 
	"masks ", 
	"powerless", 
	"surveilence", 
	"annonymous"
];
		pair11.style.display="inline";
		pair21.style.display="none";
		pair31.style.display="none";
		pair41.style.display="none";
		pair51.style.display="none";
		pair12.style.display="inline";
		pair22.style.display="none";
		pair32.style.display="none";
		pair42.style.display="none";
		pair52.style.display="none";

	}
		if(pair==2 ){
		pair11.style.display="none";
		pair21.style.display="inline";
		pair31.style.display="none";
		pair41.style.display="none";
		pair51.style.display="none";
		pair12.style.display="none";
		pair22.style.display="inline";
		pair32.style.display="none";
		pair42.style.display="none";
		pair52.style.display="none";
				_CONTENT = [ 
	"hi ", 
	"please", 
	"work", 
	"hello"
];
	}
	if(pair==3 ){
		pair11.style.display="none";
		pair21.style.display="none";
		pair31.style.display="inline";
		pair41.style.display="none";
		pair51.style.display="none";
		pair12.style.display="none";
		pair22.style.display="none";
		pair32.style.display="inline";
		pair42.style.display="none";
		pair52.style.display="none";
		_CONTENT = [ 
	"liyan ", 
	"liyan", 
	"liyan", 
	"liyan"
];
	}
	if(pair==4 ){
		pair11.style.display="none";
		pair21.style.display="none";
		pair31.style.display="none";
		pair41.style.display="inline";
		pair51.style.display="none";
		pair12.style.display="none";
		pair22.style.display="none";
		pair32.style.display="none";
		pair42.style.display="inline";
		pair52.style.display="none";
	_CONTENT = [ 
	"after ", 
	"after", 
	"after", 
	"after"
];
	}
	if(pair==5 ){
		pair11.style.display="none";
		pair21.style.display="none";
		pair31.style.display="none";
		pair41.style.display="none";
		pair51.style.display="inline";
		pair12.style.display="none";
		pair22.style.display="none";
		pair32.style.display="none";
		pair42.style.display="none";
		pair52.style.display="inline";
	_CONTENT = [ 
	"IM ", 
	"IM", 
	"IM", 
	"IM"
];
	}


})























