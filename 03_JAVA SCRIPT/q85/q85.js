//js
var isOpened = false;

var btn;
var imgCat;

window.onload = function(){
    btn = document.getElementById("btn");
    imgCat = document.getElementById("cat");
    btn.addEventListener("click",popup);

    btn.addEventListener("mouseover", mouseoverBtn);
    btn.addEventListener("mouseout", mouseoutBtn);
}

function popup(){

    if (isOpened == false){
        imgCat.style.display = "inline";
        isOpened = true;
    } else {
        imgCat.style.display = "none"
        isOpened = false;
    }

}
function mouseoverBtn() {
    document.getElementById("text").innerHTML = "버튼 위에 마우스가 있네요!";
}
function mouseoutBtn() {
    document.getElementById("text").innerHTML = "버튼 밖으로 마우스가 나갔어요!";
}