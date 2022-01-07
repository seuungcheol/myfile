var id;
var pw;

function login(){
    if (id == "a" && pw=="1111"){
        alert("로그인 성공");
    } else {
        alert("로그인 실패")
    }
    
    // alert("아이디: "+id.value+"\n 비번: "+pw.value);
}

window.onload = function(){
    id=document.getElementById("login_id")
    pw=document.getElementById("login_pw")
}
