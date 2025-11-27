var box=document.querySelector(".box");

box.addEventListener("mousemove",function(dets){
    // console.log(dets);
    document.body.style.setProperty("--x",dets.clientX+"px");
    document.body.style.setProperty("--y",dets.clientY+"px");


});