var player="";
while(true){
    player=prompt("가위 바위 보 중 하나를 입력 하세요");
    if(player=="가위"||player=="바위"||player=="보"){
        break;
    }else{
        alert("다시 입력 바랍니다.")
    }
}

switch (player){
    case "가위":player=0;break;
    case "바위":player=1;break;
    case "보":player=2;break;
    default:alert("잘못 입력 했습니다.");
}


var computer=Math.floor((Math.random)()*3); //computer 

if (player==0){
    if (computer==0){
        alert("무승부");
    } else if (computer==1){
        alert("패배");
    } else if (computer==2){
        alert("승리");
    }
}
if (player==1){
    if (computer==1){
        alert("무승부");
    } else if (computer==2){
        alert("패배");
    } else if (computer==0){
        alert("승리");
    }
}
if (player==2){
    if (computer==2){
        alert("무승부");
    } else if (computer==0){
        alert("패배");
    } else if (computer==1){
        alert("승리");
    }
}
 

 switch (computer){
     case 0:document.write("상대는 가위 입니다.");break;
     case 1:document.write("상대는 바위 입니다.");break;
     case 2:document.write("상대는 보 입니다.");break;    
 }
 

