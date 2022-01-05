var screenMessageBox;
var screenPlayerInfo;
var screenComInfo;
var orc = new Monster("오크", 1500, 350, 500, 100);
var elf = new Character("엘프", 1000, 500, 1500, 0);
var turnCount = 1;
var itTurn;  //현재 턴 표시 input text 변수
var currentTurnType = "대기" //현재 플레이 상태를 표시하는 변수 (전투, 비전투)
var roomA = new Room("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,0,0,0,0,0);				
var roomB = new Room("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0);				
var roomC = new Room("연습장 중앙","연습장 중앙이다.",1002,0,1001,0,0,0,0);
var currentRoomId = 1000;

window.onload = function(){
	screenPlayerInfo = document.getElementById("screen_player_info");
	screenMessageBox = document.getElementById("screen_message_box");
	screenComInfo = document.getElementById("screen_com_info");
	itTurn = document.getElementById("input_text_turn")
	displayCharacterInfo();//info//
	roomA.displayRoomInfo();
	
	// tv("전투 시작!!\n\n");
	

	//무한 전투 모드
	// var rotation = true
	// while (rotation){
	// 	rotation = battleTurn();
	// }
}


// - 맵 기획, 설계
// - 작은 공간을 표현하기 위한 Room 클래스 추가 ( Room.js ) 및 연결


// - Room 객체 3개 생성
// 맵 구조:	1000 연습장 입구	-	1001 연습장 서쪽	-	1002 연습장 중앙
// Room.js						
// 	>>>	var roomA = new Room("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,0,0,0,0,0);				
// 		var roomB = new Room("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0);				
// 		var roomC = new Room("연습장 중앙","연습장 중앙이다.",1002,0,1001,0,0,0,0);	


// - Room 클래스에 () 추가 - displayRoomInfo (방제목, 방설명, 다른방과 연결되는 방 표시)
// - Room 클래스에 () 추가 - getRoomEnter (다른방과 연결되는 방 표시)
// - 테스트로 처음 시작 시 roomA.displayRoomInfo(); 식으로 호출 하여 방 정보 출력
