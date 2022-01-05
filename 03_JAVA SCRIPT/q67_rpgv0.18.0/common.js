//전투 메세지 출력
function tv(str){   //var str; var str="고양이";
    var screenString = screenMessageBox.value;
    screenString = screenString + str;
    screenMessageBox.value = screenString;
    // document.write(str);
    screenMessageBoxScrollToBot();
}

//전투 메세지 출력 중단
function tvClear(){
    screenMessageBox.value = "";
}

//playerinfo 출력
function tvPlayerInfo(str){
    var screenString = screenPlayerInfo.value;
    // screenString = screenString + str;
    // screenPlayerInfo.value = screenString;
    screenPlayerInfo.value = str;
}

//playerinfo 출력 중단
function tvPlayerInfoClear(){
    screenPlayerInfo.value = "";
}

//cominfo 출력
function tvComInfo(str){
    var screenString = screenComInfo.value;
    // screenString = screenString + str;
    // screenPlayerInfo.value = screenString;
    screenComInfo.value = str;
}

function tvComInfoClear(){
    screenComInfo.value = "";
}

function br(){
    document.write("<br>");
}
function hr(){
    document.write("<hr>");
}