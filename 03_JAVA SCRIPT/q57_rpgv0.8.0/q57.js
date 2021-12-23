new Monster();
new Character();


var orc = new Monster("오크", 2500, 150, 5000, 100);
var elf = new Character("엘프", 2000, 200, 15000, 0);


displayCharacterInfo();//info//

dw("전투 시작!!<hr>");

var rotation = true
while (rotation){
	rotation = battleTurn();
}

function battleTurn(){
var comDamage = getRandomAttackValue(orc.attack); //몬스터 공격//
var userDamage = getRandomAttackValue(elf.attack);//캐릭터 공격//

orc.hp = orc.hp - userDamage;
dw(elf.name + "가 " + orc.name + "에게 데미지를 "+userDamage +" 입혔습니다.<br>");
elf.hp = elf.hp - comDamage;
dw(orc.name + "가 " + elf.name + "에게 데미지를 "+comDamage+" 입혔습니다.<br>");
hr();
if (orc.hp <= 0 || elf.hp <= 0){
	return false;
} else {
	return true;
}
}

displayCharacterInfo();//info//

//전투 결과
var finish = result();
function result(){
	if (orc.hp < elf.hp){
		dw(elf.name+"가"+orc.name+"를 처치 하였습니다.");
		hr();
		dw(orc.name+"에게"+orc.exp+"ex와"+orc.gold+"골드를 얻었습니다.");
	} else {
		dw(elf.name+ "가 사망 하였습니다.");
	}
	
}

//몬스터 및 캐릭터 random 공격력 계산//
function getRandomAttackValue(attack){						
	attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로					
	var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴					
	return random;					
}


//몬스터 및 캐릭터 정보//
function displayCharacterInfo(){
	if (orc.hp < elf.hp){
		elf.exp = elf.exp + orc.exp;
	}
	orc.info();
	elf.info();
}

// - 전투 종료 처리(종료메세지 출력, 경험치 획득)
// - 플레이어 간략 정보 표시에 현재 경험치/다음 레벨업 필요 경험치 표시 추가 ex. [엠피스(70/100)](exp: 100/300)
// (레벨업 경험치 기획은 현재 미정. 300값 하드코딩.)
// - 전투 종료 후 얻은 경험치가 표시에 반영 되도록 케릭터 간략 정보 출력 처리 함수 위치 수정
// - 적 전투력 높혀서 플레이어도 잘 죽는지 확인
