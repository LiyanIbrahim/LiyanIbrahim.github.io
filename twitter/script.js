let img=document.getElementById("image1");
var cnt=1;

    img.addEventListener('click', function(){
    		cnt++;
               	if(cnt==2){

        		img.src = '2.png';
        	} else if(cnt==3){
        		img.src = '3.png';
        	}
        	else if(cnt==4){
        		img.src = '4.png';
        	}
        	else if(cnt==5){
        		img.src = '5.png';
        	}
        	else if(cnt==6){
        		img.src = '6.png';
        	}
        	else if(cnt==7){
        		img.src = '7.png';
        	}
        	else if(cnt==8){
        		img.src = '8.png';
        	}
        	else if(cnt==9){
        		img.src = '9.png';
        	}
    });
    //     function changeImage(){
    //     	if(img.src = '1.png'){

    //     		img.src = '3.png';
    //     	} else if(img.src = '2.png'){
    //     		img.src = '3.png';
    //     	}

    // }