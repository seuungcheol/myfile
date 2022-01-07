const LOGIN_ID = "aaaa";
const LOGIN_PW = "1111";
var i;
var p;
var id;
var pw;
var loginBox;
var signupBox;

function login(){
    id=i.value;
    pw=p.value;
    if(id == LOGIN_ID && pw == LOGIN_PW){
        procLogin();
    } else {
        alert("로그인 실패");
    }
}

function procLogin(){
    loginBox.innerHTML = "<p>" + id + "회원님 반갑습니다.</p>";
}

function signup(){
    window.location.href ="reg_member.html"
}


window.onload = function(){
    i=document.getElementById("login_id");
    p=document.getElementById("login_pw");
    loginBox=document.getElementById("login_box");

}

