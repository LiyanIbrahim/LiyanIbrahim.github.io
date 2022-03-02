let img=document.getElementById("image1p2");
var cnt=1;
let down=document.getElementById("down");
let tweet=document.getElementById("image2");
let richman=document.getElementById("bio2");
let man3=document.getElementById("bio3");

    down.addEventListener('click', function(){
    		cnt++;
               	if(cnt==2){

        		img.src = '2.png';
        		richman.style.display="none";
        	} else if(cnt==3){
        		// img.src = '3.png';
        		richman.style.display="inline";
        		tweet.style.display="inline";
        		img.src = '4.png';
        	}
        	else if(cnt==4){
        		// tweet.style.display="inline";
        		// img.src = '4.png';
        		richman.style.display="none";
        		tweet.style.display="none";
        		img.src = '5.png';
        	}
        	else if(cnt==5){
        		// tweet.style.display="none";
        		// img.src = '5.png';
        		img.src = '6.png';
        		richman.style.display="inline";
        	}
        	else if(cnt==6){
        		// img.src = '6.png';
        		img.src = '7.png';
        		man3.style.display="inline";
        	}
        	else if(cnt==7){
        		// img.src = '7.png';
        		img.src = '8.png';
        		man3.style.display="none";
        		richman.style.display="none";
        	}
        	else if(cnt==8){
        		// img.src = '8.png';
        		img.src = '9.png';
        	}
        	// else if(cnt==9){
        	// 	img.src = '9.png';
        	// }
    });
    //     function changeImage(){
    //     	if(img.src = '1.png'){

    //     		img.src = '3.png';
    //     	} else if(img.src = '2.png'){
    //     		img.src = '3.png';
    //     	}

    // }