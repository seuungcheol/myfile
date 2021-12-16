var r = Math.floor(Math.random() * 10)+1;

labelA:
for(var i=1;i<=2;i++){
    document.write("<hr>i :" + i + "회차<br>");    

    labelB:
    for(var j=1;j<=3;j++){
        document.write("<br>j :" + j + "회차<br>");    

        labelC:
        for(var k=1;k<=4;k++){
            document.write("k :" + k + " ");    
            if(k == 2){
                continue labelB;
            }
        }        

    }
}

document.write("<br>");


document.write("<br>");
