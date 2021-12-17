var random;
random=Math.floor(Math.random()*20)+1;

document.write("<div id='main'>");
for ( var i = 1 ; i <= random ; i = i + 1 ){

 
 if(i==7) {
    document.write("<div class='a_box'>");
 }else {
    document.write("<div class='b_box'>");
    }
    document.write("<img class='cat' src='cat.jpg'>");
    document.write("<p class='cat_number'>"+i+"</p>");
    document.write("</div>");
}
document.write("</div>");