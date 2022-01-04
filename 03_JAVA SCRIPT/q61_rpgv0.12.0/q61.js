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
		result();
		displayCharacterInfo();
		return false;
	} else {
		displayCharacterInfo();
		return true;

	}
}

//턴 표시
function turn() {
	battleTurn();
	console.log("현재 턴:" + turnCount);
	turnCount ++; //turnCount = turnCount + 1;
	itTurn.value = turnCount; 
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
var screenPlayerInfo;
var screenComInfo;
var orc = new Monster("오크", 1500, 350, 500, 100);
var elf = new Character("엘프", 1000, 500, 1500, 0);
var turnCount = 0;
var itTurn;  //현재 턴 표시 input text 변수

window.onload = function(){
	screenPlayerInfo = document.getElementById("screen_player_info");
	screenMessageBox = document.getElementById("screen_message_box");
	screenComInfo = document.getElementById("screen_com_info");
	itTurn = document.getElementById("input_text_turn")
	displayCharacterInfo();//info//
	
	tv("전투 시작!!\n\n");
	

	//무한 전투 모드
	// var rotation = true
	// while (rotation){
	// 	rotation = battleTurn();
	// }

	
}