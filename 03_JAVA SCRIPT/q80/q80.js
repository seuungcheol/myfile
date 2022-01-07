const LOGIN_ID = "aaaa";
const LOGIN_PW = "1111";
var i;
var p;
var id;
var pw;
var loginBox;    //로그인 창

function login(){ //아이디 비번 입력 완료 or 실패
    id=i.value;
    pw=p.value;
    if(id == LOGIN_ID && pw == LOGIN_PW){
        procLogin();
    } else {
        alert("로그인 실패");
    }
}

function procLogin(){  //로그인 완료시 메세지
    loginBox.innerHTML = "<p>" + id + "회원님 반갑습니다.</p>";
}

function signup(){  //회원 가입 화면으로 이동
    window.location.href ="reg_member.html";
}   


window.onload = function(){
    i=document.getElementById("login_id");
    p=document.getElementById("login_pw");
    loginBox=document.getElementById("login_box");
}

