var random;
random=Math.floor(Math.random()*6)+1;

switch (random){
   case 1:document.write("<img class='image' src='dice_1.jpg'>");break;
   case 2:document.write("<img class='image' src='dice_2.jpg'>");break;
   case 3:document.write("<img class='image' src='dice_3.jpg'>");break;
   case 4:document.write("<img class='image' src='dice_4.jpg'>");break;
   case 5:document.write("<img class='image' src='dice_5.jpg'>");break;
   case 6:document.write("<img class='image' src='dice_6.jpg'>");break;
}