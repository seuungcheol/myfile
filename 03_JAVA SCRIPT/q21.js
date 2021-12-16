const star = "☆";
const space = "_";

for(var i=1;i<=10;i=i+1){
    for(var j=1;j<=10;j++){
        if(j>(10-i)){
            document.write(star);
        } else {
            document.write(space);
        }
    }    
    document.write("<br>");
}