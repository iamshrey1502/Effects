var p=document.querySelector("p");
const text=p.innerHTML;
const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// var main=document.querySelector("#main");
var iteration=0;

p.addEventListener("mouseenter",function(){
    // console.log("hello");
    var int=setInterval(function(){

        var str=text.split("").map(function(val,index){
            
            if(index<iteration){
                return text[index];
            }
            return characters[Math.floor(Math.random()*characters.length)];
        }).join("");
        p.innerHTML=str;
        iteration+=0.25;
    },30);
});


// var spot=document.querySelector("#spotlight");
const root = document.documentElement;
// spot.addEventListener("mousemove",(dets)=>{
//     console.log(dets.clientX,dets.clientY);
//     document.body.style.setProperty("--x",dets.clientX+"px");
//     document.body.style.setProperty("--y",dets.clientY+"px");



// });
document.addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
});