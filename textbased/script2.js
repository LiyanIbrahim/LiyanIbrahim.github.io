let imagesong=document.getElementById("a1");
let warning=document.getElementById("warning");

imagesong.addEventListener('mouseenter', event => {
	imagesong.style.display="none";
	warning.style.display="inline";
	document.body.style.background="#A30000";
	
})

warning.addEventListener('mouseleave', event=>{
	warning.style.display="none";
	imagesong.style.display="inline";
	document.body.style.background="#8FA01F";
})