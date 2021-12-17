var random;
random=Math.floor(Math.random()*10)+1;
var s=random;
alert(s)

for (var i=1;i<10;i=i+1){
    if(i==s){
        continue;        
    }
    document.write(i+"<br>");
}