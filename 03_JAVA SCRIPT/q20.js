const star = "☆";
const space = "_";

for(var i=1;i<10;i=i+1){
    for(var j=1;j<10;j=j+1){
        if(j<=(i-1)){
            document.write(space);
        } else{
            document.write(star);
        }
    }    
    document.write("<br>");
}