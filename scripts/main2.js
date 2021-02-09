// This javascript file manipulates the team.html file 

let i1= document.getElementById("first");
let i2=document.getElementById("second");
let i3=document.getElementById("third");
let i4=document.getElementById("forth");

let counter1=0;
let counter2=0;
let counter3=0;
let counter4=0;




i1.addEventListener('click', event =>{
	counter1++;
	console.log("hello");
	console.log(counter1);

	if(counter1%2==0){
	 	i1.src = '1teamm.png';

	} else if(counter1%2!=0){
		i1.src = 'emaillucy.png';
	}
})

i2.addEventListener('click', event =>{
	counter2++;
	console.log("hello");
	console.log(counter1);

	if(counter2%2==0){
	 	i2.src = '3teamm.png';

	} else if(counter2%2!=0){
		i2.src = 'emailliyan.png';
	}
})

i3.addEventListener('click', event =>{
	counter3++;
	console.log("hello");
	console.log(counter1);

	if(counter3%2==0){
	 	i3.src = '2teamm.png';

	} else if(counter3%2!=0){
		i3.src = 'emailmaira.png';
	}
})

i4.addEventListener('click', event =>{
	counter4++;
	console.log("hello");
	console.log(counter1);

	if(counter4%2==0){
	 	i4.src = '4teamm.png';

	} else if(counter4%2!=0){
		i4.src = 'emailnoora.png';
	}
})