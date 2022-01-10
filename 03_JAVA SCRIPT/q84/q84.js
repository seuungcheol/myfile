//js
var btn;
var imgCat;

window.onload = function(){
    btn = document.getElementById("btn");
    imgCat = document.getElementById("cat");
    btn.addEventListener("click",popup);
}

function popup(){
    imgCat.style.display = "inline";
}
