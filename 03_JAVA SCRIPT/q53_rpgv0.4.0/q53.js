function Monster(name, hp, attack){		
	this.name = name;   // 이름		
	this.hp = hp;    // 체력
	this.full = hp;   //총 체력
	this.attack = attack;  // 공격

	this.info = function(){
		dw("이름 : "+this.name+"<br>"+"체력 : "+"("+this.hp+"/"+this.full+")"+"<hr>");
	}					
}

function Character(name, hp, attack){		
	this.name = name;   	
	this.hp = hp;
	this.full = hp;   //총 체력    		
	this.attack = attack;  

	this.info = function(){
		dw("이름 : "+this.name+"<br>"+"체력 : "+"("+this.hp+"/"+this.full+")"+"<hr>");
	}					
}

new Monster();
new Character();

var orc = new Monster("오크", 5000, 500);
var elf = new Character("엘프", 1500, 150);


orc.info();
elf.info();
dw("전투 시작!!<hr>");

var comDamage = getRandomAttackValue(orc.attack);
var userDamage = getRandomAttackValue(elf.attack);


orc.full = orc.full - userDamage;
dw(elf.name + "가 " + orc.name + "에게 데미지를 "+userDamage +" 입혔습니다.<br>");
elf.full = elf.full - comDamage;
dw(orc.name + "가 " + elf.name + "에게 데미지를 "+comDamage+" 입혔습니다.<br>");r();

function getRandomAttackValue(attack){						
	attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로					
	var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴					
	return random;					
}