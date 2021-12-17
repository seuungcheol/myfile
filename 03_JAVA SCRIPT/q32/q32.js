var player="";
var computer="";

var rpcInputText;
var rpcResultScreen;

var resultString="";

window.onload=function(){
    rpcInputText=document.getElementById("rpc_input_text");
    rpcResultScreen=docment.tegElementById("rpc_result_screen");
}

function rpcInputButtonClick(){
    while(true){
        player=rpcInputText.value;
        if(player=="가위"||player=="바위"||player=="보"){
            break;
        } else{
            alert("다시 입력 바랍니다.");
        }
    }      
       
    var computer=Math.floor((Math.random)()*3); //computer 
        
    if(computer==0){
        computer="가위"
    }
    if(computer==1){
        computer="바위"
    }
    if(computer==2){
        computer="보"
    }
    // dw("플레이어:"+player);
    // br();
    // dw("컴퓨터:"+computer);
    //  br();
    resultString="플레이어:"+player;
    resultString="\n";
    resultString="컴퓨터:"+computer;
    resultString="\n";
        
    var winDrowLose="";
    switch(player){
        case "가위":
            switch(computer){
                case "가위":
                    winDrowLose="무승부";
                    break;    
                case "바위":
                    winDrowLose="패배";
                    break;    
                case "보":
                    winDrowLose="승리";
                    break;    
            }
             break;
        case "바위":
            switch(computer){
                case "가위":
                    winDrowLose="승리";
                    break;    
                case "바위":
                    winDrowLose="무승부";
                    break;    
                case "보":
                     winDrowLose="패배";
                    break;    
            }
             break;
        case "보":
            switch(computer){
                case "가위":
                    winDrowLose="패배";
                    break;    
                case "바위":
                    winDrowLose="승리";
                    break;    
                case "보":
                    winDrowLose="무승부";
                    break;    
            }
            break;
    }
    // dw(winDrowLose);
    resultString="결과:"+winDrowLose;
    rpcResultScreen.value=resultString;
}