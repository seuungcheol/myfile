//몬스터 및 캐릭터 정보//
function displayCharacterInfo(){
	if (orc.hp < 0){
		elf.exp = elf.exp + orc.exp;
	}
	orc.info();
	elf.info();
}

//전투 메세지 출력
function battleTurn(){
	var comDamage = getRandomAttackValue(orc.attack); //몬스터 공격//
	var userDamage = getRandomAttackValue(elf.attack);//캐릭터 공격//
	
	orc.hp = orc.hp - userDamage;
	tv(elf.name + "가 " + orc.name + "에게 데미지를 "+userDamage +" 입혔습니다.\n\n");
	elf.hp = elf.hp - comDamage;
	tv(orc.name + "가 " + elf.name + "에게 데미지를 "+comDamage+" 입혔습니다.\n\n");
	if (orc.hp <= 0 || elf.hp <= 0 || orc.hp <= -100 || elf.hp <= -100 || orc.hp <= -50 || elf.hp <= -50){
		displayCharacterInfo();
		result();
		return false;
	} else {
		displayCharacterInfo();
		return true;

	}
}

//전투 메세지 출력 중단
function nomalTurn(){
	// tvClear();
	tv("특별한 것이 안보임\n")
}

//턴 표시
function turn() {
	if (currentTurnType == "전투"){
		battleTurn();
	} else {
		nomalTurn();
	}
	// battleTurn();
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
	currentTurnType = "대기";
	tvComInfoClear();
	
}


//몬스터 및 캐릭터 random 공격력 계산//
function getRandomAttackValue(attack){						
	attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로					
	var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴					
	return random;					
}

function screenMessageBoxScrollToBot(){
	screenMessageBox.scrollTop = screenMessageBox.scrollHeight;
}

function hr(){
    document.write("<hr>");
}
function br(){
    document.write("<br>");
}


//move_button 출력
function moveEast(){
    tv("동쪽으로 이동 합니다.\n");
    turn();
}
function moveWest(){
    tv("서쪽로 이동 합니다.\n");
    turn();
}
function moveSouth(){
    tv("남쪽으로 이동 합니다.\n");
    turn();
}
function moveNorth(){
    tv("북쪽으로 이동 합니다.\n");
    turn();
}
function moveUp(){
    tv("위쪽로 이동 합니다.\n");
    turn();
}
function moveDown(){
    tv("밑쪽으로 이동 합니다.\n");
    turn();
}