new Monster();
new Character();

var orc = new Monster("오크", 5000, 500);
var elf = new Character("엘프", 1500, 150);


displayCharacterInfo();//info//

dw("전투 시작!!<hr>");


var comDamage = getRandomAttackValue(orc.attack); //몬스터 공격//
var userDamage = getRandomAttackValue(elf.attack);//캐릭터 공격//


orc.full = orc.full - userDamage;
dw(elf.name + "가 " + orc.name + "에게 데미지를 "+userDamage +" 입혔습니다.<br>");
elf.full = elf.full - comDamage;
dw(orc.name + "가 " + elf.name + "에게 데미지를 "+comDamage+" 입혔습니다.<br>");
hr();

displayCharacterInfo();//info//


//몬스터 및 캐릭터 random 공격력 계산//
function getRandomAttackValue(attack){						
	attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로					
	var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴					
	return random;					
}


//몬스터 및 캐릭터 정보//
function displayCharacterInfo(){
	orc.info();
	elf.info();
}