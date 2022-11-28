    


    // var imgs = ["src1.png", "src2.png", "src3.png", "src4.png", "src5.png", "src6.png", "src7.png", "src8.png", "src9.png"];

    // function changeImage(dir) {
    //     var img = document.getElementById("imgClickAndChange");
    //     img.src = imgs[imgs.indexOf(img.src) + (dir || 1)] || imgs[dir ? imgs.length - 1 : 0];
    // }

    // document.onkeydown = function(e) {
    //     e = e || window.event;
    //     if (e.keyCode == '37') {
    //         changeImage(-1) //left <- show Prev image
    //     } else if (e.keyCode == '39') {
    //         // right -> show next image
    //         changeImage()
    //     }
    // }
let clicked=document.getElementById("demoguide");

// function change(index) {
//   var imageLookup = ["src1.png", "src2.png", "src3.png", "src4.png", "src5.png", "src6.png", "src7.png", "src8.png", "src9.png"];
//   clicked.src = imageLookup[index];
// }
console.log("sadeen");
let cnt=0;
 // document.getElementById("demoguide").src = "src1.png";
clicked.addEventListener('click', event =>{
   console.log(cnt);
   cnt++;
    if(cnt==1){
        console.log(cnt);
         clicked.src="src2.png";
         // cnt++;
         // console.log(cnt);
         
    }  if(cnt==2){
        console.log(cnt);
        clicked.src="src3.png";
         // cnt=3;
        console.log("sadeen4");

    } if(cnt==3){
        clicked.src="src4.png";
         // cnt++;

    } else if(cnt==4){
        clicked.src="src5.png";
         // cnt++;

    }else if(cnt==5){
         clicked.src="src6.png";
         // cnt++;

    } else if(cnt==6){
         clicked.src="src7.png";
         // cnt++;

    } else if(cnt==7){
         clicked.src="src8.png";
         // cnt++;

    } else if(cnt==8){
         clicked.src="src9.png";
         // cnt++;

    }else if (cnt==9){
       clicked.src="src1.png";
         cnt=0;
    } 
    // console.log("sadeen2");
//     if(clicked.src == 'src1.png'){
//         clicked.src="src2.png";
//         console.log("sadeen2");
// }

    // clicked.style.display="none";


})  
// if(document.getElementById("imgClickAndChange").src == "src1.png"){
//     change(2);
// }
//     // function changeImage() {
    //     var img = document.getElementById("imgClickAndChange");
    //     // img.src = imgs[imgs.indexOf(img.src)];
    //     if( img.src=="src1.png"){
    //         img.src="src2.png";
    //     }else if(img.src==imgs[2]){
    //         img.src="src3.png";
    //     }

    // }






















