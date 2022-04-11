//refresh button
let refresh=document.getElementById("refresh");
let image1=document.getElementById("image1p2");
let image2=document.getElementById("image1p3");
let image3=document.getElementById("image1p4");
let paragraph=document.getElementById("paragraph");
let paragraph2=document.getElementById('paragraph2');
let paragraph3=document.getElementById('paragraph3');
var cnt=1;
var cnt2=1;

let down=document.getElementById("down");
   down.addEventListener('click', function(){
 	cnt2++;
 	console.log(cnt2);
 	if(cnt2==1){
 	image1.src="1.png";
	image2.src="2.png";
	image3.src="3.png";
	paragraph.style.display="inline";
 	}
 	else if(cnt2==2){
 		image1.src="4.png";
 		image2.src="5.png";
 		image3.src="6.png";
 		paragraph.style.display="none";
    paragraph3.style.display="inline";

 	}else if(cnt2==3){
 		image1.src="7.png";
 		image2.src="8.png";
 		image3.src="9.png";
 		paragraph2.style.display="inline";
    paragraph3.style.display="none";
 	} else if(cnt2== 4){
		cnt2=1;
		image1.src="1.png";
	image2.src="2.png";
	image3.src="3.png";
	paragraph2.style.display="none";
	paragraph.style.display="inline";
 }
	// else if(cnt2==1){
	// image1.src="1.png";
	// image2.src="2.png";
	// image3.src="3.png";
	// paragraph.style.display="inline";

 // }
    });


//typing effect 
// List of sentences
class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
'communities',
'opinions', 
'ideas', 
'memories'
]

const el = document.querySelector('.scramble')
const fx = new TextScramble(el)

var counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 3000)
  })
  counter = (counter + 1) % phrases.length
}

next();

var id = null;
function myMove() {
  var elem = document.getElementById("down");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}

