function tv(str){   //var str; var str="고양이";
    var screenString = screenMessageBox.value;
    screenString = screenString + str;
    screenMessageBox.value = screenString;
    // document.write(str);
}
function tvPlayerInfo(str){
    var screenString = screenPlayerInfo.value;
    // screenString = screenString + str;
    // screenPlayerInfo.value = screenString;
    screenPlayerInfo.value = str;
}

function tvComInfo(str){
    var screenString = screenComInfo.value;
    // screenString = screenString + str;
    // screenPlayerInfo.value = screenString;
    screenComInfo.value = str;
}

function hr(){
    document.write("<hr>");
}
function br(){
    document.write("<br>");
}