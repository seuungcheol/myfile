//js
var cat;

window.onload = function(){
    cat = document.getElementById("cat");

    cat.addEventListener("mouseover", mouseoverCat);
    cat.addEventListener("mouseout", mouseoutBtn);
}
function mouseoverCat() {
    document.addEventListener("none")
}