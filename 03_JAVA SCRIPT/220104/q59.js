//몬스터 및 캐릭터 정보//
function displayCharacterInfo(){
	if (orc.hp < elf.hp){
		elf.exp = elf.exp + orc.exp;
	}
	orc.info();
	elf.info();
}


function battleTurn(){
	var comDamage = getRandomAttackValue(orc.attack); //몬스터 공격//
	var userDamage = getRandomAttackValue(elf.attack);//캐릭터 공격//
	
	orc.hp = orc.hp - userDamage;
	tv(elf.name + "가 " + orc.name + "에게 데미지를 "+userDamage +" 입혔습니다.\n\n");
	elf.hp = elf.hp - comDamage;
	tv(orc.name + "가 " + elf.name + "에게 데미지를 "+comDamage+" 입혔습니다.\n\n");
	if (orc.hp <= 0 || elf.hp <= 0){
		return false;
	} else {
		return true;
	}
}

//전투 결과
function result(){
	tv("전투 종료!!\n\n");
	if (orc.hp < elf.hp){
		tv(elf.name+"가"+orc.name+"를 처치 하였습니다.\n");
		tv(orc.name+"에게"+orc.exp+"ex와"+orc.gold+"골드를 얻었습니다.\n\n");
	} else {
		tv(elf.name+ "가 사망 하였습니다.\n\n");
	}
	
}


//몬스터 및 캐릭터 random 공격력 계산//
function getRandomAttackValue(attack){						
	attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로					
	var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴					
	return random;					
}




var screenMessageBox;
var screenPlayer;
var screenCom;
var orc = new Monster("오크", 2500, 150, 5000, 100);
var elf = new Character("엘프", 2000, 200, 15000, 0);


window.onload = function(){
	screenMessageBox = document.getElementById("screen_message_box");
	screenPlayer = document.getElementById("screen_player");
	screenCom = document.getElementById("screen_com");
	
	displayCharacterInfo();//info//
	
	tv("전투 시작!!\n\n");
	
	var rotation = true
	while (rotation){
		rotation = battleTurn();
	}
	result();
	displayCharacterInfo();//info//
	
}