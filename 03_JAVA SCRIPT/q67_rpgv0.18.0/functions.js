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
	tv(elf.name + "가 " + orc.name + "에게 데미지를 "+userDamage +" 입혔습니다.\n");
	elf.hp = elf.hp - comDamage;
	tv(orc.name + "가 " + elf.name + "에게 데미지를 "+comDamage+" 입혔습니다.\n");
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
	tv("특별한 것이 안보임\n\n")
}

//턴 표시
function turn() {
	if (currentTurnType == "전투"){
		battleTurn();
	} else {
		nomalTurn();
	}
	// battleTurn();
	turnCount ++; //turnCount = turnCount + 1;
	itTurn.value = turnCount; 
	console.log("현재 턴:" + turnCount);
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


//move_button 출력
function move(direction){
    var nowRoom = getCurrentRoomObject()
    var connectionRoomId = nowRoom.getIdByDirection(direction);
    if(connectionRoomId == 0){
        tv("갈수 없음\n");
        return;
    } else {
        currentRoomId = connectionRoomId;
        console.log("현재 방번호:"+currentRoomId);
    }

    switch (direction) {
        case "동":
            tv("동쪽으로 이동했습니다.\n\n");
            break;
        case "서":
            tv("서쪽으로 이동했습니다.\n\n");
            break;
        case "남":
            tv("남쪽으로 이동했습니다.\n\n");
            break;
        case "북":
            tv("북쪽으로 이동했습니다.\n\n");
            break;
        case "위":
            tv("위쪽으로 이동했습니다.\n\n");
            break;
        case "밑":
            tv("아래쪽으로 이동했습니다.\n\n");
            break;
    }
    displayRoomInfo();
    turn();
}

/* 현재 방 id를 가지고 방 배열에서 해당 방 객체를 리턴 */
function getCurrentRoomObject(){    
    for(var i=0;i<roomArray.length;i++){
        if(roomArray[i].id == currentRoomId){
            return roomArray[i];
        }
    }
}
function displayRoomInfo(){
    getCurrentRoomObject().displayRoomInfo();
}