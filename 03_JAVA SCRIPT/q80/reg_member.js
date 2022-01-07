var newId;   //회원가입 아이디
var newPw;   //회원가입 암호
var reEnter;    //회원가입 암호 재입력
var newName;   //회원가입 이름
var Email;   //회원가입 이메일
var ipBirthY;
var ipBirthM;
var ipBirthD;
var sNumber;
var mNumber;
var fNumber;

function completeCheck(){  //최소 및 최소 글자수 확인 절차
    id = newId.value;
    pw = newPw.value;
    re = reEnter.value;
    nName = newName.value;
    nEmail = Email.value;
    birth = ipBirthY.value +"/"+ ipBirthM.value +"/"+ ipBirthD.value;
    hpNumber = sNumber.value +"-"+ mNumber.value +"-"+ fNumber.value;

    if (id.length < 6){        
        alert("아이디 최소 6글자 입력");  //아이디 체크
    } else {
        console.log("아이디 :"+newId.value);
    }
    if (pw.length < 6){   
        alert("암호 최소 6자리 입력"); //암호 체크
    } else {
        console.log("암호 : "+newPw.value);
    }
    if (re != pw){   
        alert("암호가 일치 하지 않습니다"); //암호 재입력 체크
    } else {
        console.log("암호 일치: ok");
    }
    if (nName.length < 2){    
        alert("이름은 최소 2글자 입력");
    } else {
        console.log("이름 : "+newName.value);
    }
    if (nEmail.length < 10){   
        alert("E-mail은 최소 10글자 입력");
    } else {
        console.log("이메일 : "+Email.value);
    }
    
    for(var i=0;i<ipSexes.length;i++){	
        // ipSexes[i] 의 checked 멤버 변수에 해당 radio 가 체크된 상태면 true 가 리턴되므로 둘다 true 면 체크상태라는 뜻
        if(ipSexes[i].checked == true){
        sex = ipSexes[i].value; // 해당 라디오 버튼의 값을 변수에 저장
        }
    }


    if (id.length >= 6 && pw.length >= 6 && re == pw && nName.length >= 2 && nEmail.length >= 10){
        return alert("회원가입 완료 되었습니다.\n\n아이디 :"+id+"\n암호 :"+pw+"\n이름 :"+nName+"\n이메일 :"+nEmail+"\n생년월일 :"+birth+"\n성별 :"+sex+"\n전화번호 :"+hpNumber);
    }
}

window.onload = function(){
    newId=document.getElementById("new_id");
    newPw=document.getElementById("new_pw");
    reEnter=document.getElementById("re_enter");
    newName=document.getElementById("new_name");
    Email=document.getElementById("e_mail");
    ipBirthY=document.getElementById("birth_y");
    ipBirthM=document.getElementById("birth_m");
    ipBirthD=document.getElementById("birth_d");
    ipSexes=document.getElementsByName("sex")
    sNumber=document.getElementById("s_number");
    mNumber=document.getElementById("m_number");
    fNumber=document.getElementById("f_number");
}

