let text2=document.getElementById("text2");
let bird1=document.getElementById("bird1");
let bird2=document.getElementById("bird2");
let bird3=document.getElementById("bird3");
let bird4=document.getElementById("bird4");
let bird5=document.getElementById("bird5");

let text1=document.getElementById("text1");
let image1=document.getElementById("image1");
let image2=document.getElementById("image2");
let body=document.getElementById("p2");


var birdIds = ["bird1", "bird2", "bird3", "bird4", "bird5"];
  var delay = 1000; 
  function displayBirds() {
    birdIds.forEach(function (birdId, index) {
      setTimeout(function () {
        document.getElementById(birdId).style.display = "block";
      }, index * delay);
    });
  }

  function hideBirds() {
      bird1.style.display = "none";
      bird2.style.display = "none";
      bird3.style.display = "none";
      bird4.style.display = "none";
      bird5.style.display = "none";
  }

image2.addEventListener('mouseenter', event =>{
    displayBirds(); 

})

image2.addEventListener('mouseleave', event =>{
    hideBirds(); 

})


image1.addEventListener('mouseenter', event =>{
    document.getElementById("image2").style.display="none";
    document.getElementById("image3").style.display="none";
    document.getElementById("bird1").style.display="none";
    document.getElementById("bird2").style.display="none";
    document.getElementById("bird3").style.display="none";
    document.getElementById("bird4").style.display="none";
    document.getElementById("bird5").style.display="none";
    //document.getElementById("text2").style.display="none";
    //document.getElementById("text3").style.display="none";
    document.getElementById("text4").style.display="none";
    document.getElementById("text1").style.color= "#8B0000";
    document.getElementById("text1").style.top = "15px";
    document.getElementById("text1").style.left = "600px";
    document.getElementById("text1").style.fontSize="10vh";
    document.getElementById("text1").style.opacity="1"
})


image1.addEventListener('mouseleave', event =>{
    document.getElementById("image2").style.display="block";
    document.getElementById("image3").style.display="block";
    //document.getElementById("text2").style.display="block";
    //document.getElementById("text3").style.display="block";
    document.getElementById("text4").style.display="block";
    document.getElementById("text1").style.color= "black";
    document.getElementById("text1").style.opacity="0.1"
})



