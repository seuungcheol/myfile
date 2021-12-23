function Monster(name, hp, hp2, attack){		
	this.name = name;   // 이름		
	this.hp = hp;    // 나이
	this.attack = attack;  // 몸무게

	this.info = function(){
		dw("이름 : " + this.name + "<br>" + "체력 : " + this.hp + "<br>" + "공격력 : " + this.attack + "<hr>");
	}					
}

function Character(name, hp, hp, attack){		
	this.name = name;   // 이름		
	this.hp = hp;    // 나이		
	this.attack = attack;  // 몸무게

	this.info = function(){
		dw("이름 : " + this.name + "<br>" + "체력 : " + this.hp + "<br>" + "공격력 : " + this.attack + "<hr>");
	}					
}

new Monster();
new Character();

var orc = new Monster("오크", 5000, 300);
var elf = new Character("엘프", 1500, 150);


orc.info();
elf.info();
dw("전투 시작!!<hr>");

var comDamage = getRandomAttackValue(orc.attack);
var userDamage = getRandomAttackValue(elf.attack);

//회차별 전투 메세지//
for(var i=1;i<=1;i++){
    document.write("전투 :" + i + "회차<br>");
	dw(orc.name +"가 "+elf.name+"에게 데미지 "+comDamage+ "을 입혔습니다.");
	hr();
	dw(elf.name +"가 "+orc.name+"에게 데미지 "+userDamage+ "을 입혔습니다.");
	hr();
}

function getRandomAttackValue(attack){						
	attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로					
	var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴					
	return random;					
}