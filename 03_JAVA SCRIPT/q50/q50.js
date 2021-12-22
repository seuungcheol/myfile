function Character(name, hp, attack){		
	this.name = name;   // 이름		
	this.hp = hp;    // 나이		
	this.attack = attack;  // 몸무게

	this.info = function(){
		dw(name + "<br>" + hp + "<br>" + attack + "<hr>");
	}
}

new Character();

var ocr = new Character("이름 :오크", "체력 : 5,000", "공격력 : 300");
var elf = new Character("이름 :엘프", "체력 : 1,500", "공격력 : 150");

ocr.info();
elf.info();