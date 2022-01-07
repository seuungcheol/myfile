const LOGIN_ID = "aaaa";
const LOGIN_PW = "1111";
var i;
var p;
var id;
var pw;
var loginBox;    //로그인 창

var newId;   //회원가입 아이디
var newPw;   //회원가입 암호
var reEnter;    //회원가입 암호 재입력
var newName;   //회원가입 이름
var Email;   //회원가입 이메일

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

function completeCheck(){  //최소 및 최소 글자수 확인 절차
    id = newId.value;
    pw = newPw.value;
    re = reEnter.value;
    nName = newName.value;
    nEmail = Email.value;
    
    if (id.length < 6){
        alert("아이디 최소 6글자 입력");  //아이디 체크
    }
    if (pw.length < 6){
        alert("암호 최소 6자리 입력"); //암호 체크
    }
    if (re != pw){
        alert("암호가 일치 하지 않습니다"); //암호 재입력 체크
    }
    if (nName.length < 2){
        alert("이름은 최소 2글자 입력");
    }
    if (nEmail.length < 10){
        alert("E-mail은 최소 10글자 입력");
    }
    if (id.length >= 6 && pw.length >= 6 && re == pw && nName.length >= 2 && nEmail.length >= 10){
        return alert("회원가입 완료 되었습니다.");
    }
}
    


window.onload = function(){
    i=document.getElementById("login_id");
    p=document.getElementById("login_pw");
    loginBox=document.getElementById("login_box");
    newId=document.getElementById("new_id");
    newPw=document.getElementById("new_pw");
    reEnter=document.getElementById("re_enter");
    newName=document.getElementById("new_name");
    Email=document.getElementById("e_mail");
}

