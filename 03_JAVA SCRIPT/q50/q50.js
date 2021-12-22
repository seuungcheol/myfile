function Character(name, hp, attack){		
	this.name = name;   // 이름		
	this.hp = hp;    // 나이		
	this.attack = attack;  // 몸무게

	this.info = function(){
		dw("이름 : " + name + "<br>" + "체력 : " + hp + "<br>" + "공격력 : " + attack + "<hr>");
	}
}

new Character();

var ocr = new Character("오크", 5000, 300);
var elf = new Character("엘프", 1,500, 150);

ocr.info();
elf.info();
