function Character(name, hp, attack){		
	this.name = name;   // 이름		
	this.hp = hp;    // 나이		
	this.attack = attack;  // 몸무게

	this.info = function(){
		dw("이름 : " + this.name + "<br>" + "체력 : " + this.hp + "<br>" + "공격력 : " + this.attack + "<hr>");
	}
	// this.fight = function getRandomAttackValue(attack){						
	// 	attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로					
	// 	var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴					
	// 	return random;					
	// }						
}

new Character();

var orc = new Character("오크", 5000, 300);
var elf = new Character("엘프", 1500, 150);

orc.info();
elf.info();
dw("전투 시작!!<hr>");

// var round1 = elf.hp - orc.attack;
// dw(round1);
// hr();

for(var i=1;i<=1;i++){
    document.write("전투 :" + i + "회차<br>");
	dw(orc.name +"의 공격으로"+elf.name+"의 체력 :"+(elf.hp - orc.attack));
	hr();
	dw(elf.name +"의 공격으로"+orc.name+"의 체력 :"+(orc.hp - elf.attack));
	hr();
}
