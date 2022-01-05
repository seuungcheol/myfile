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

// var roomArray = [roomA,roomB,roomC];
/* 방 객체를 배열에 넣음. 방 정보 로딩 */
var roomArray = [
    new Room("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,0,0,0,0,0) ,
    new Room("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0) ,
    new Room("연습장 중앙","연습장 중앙이다.",1002,0,1001,0,0,0,0)
];

window.onload = function(){
	screenPlayerInfo = document.getElementById("screen_player_info");
	screenMessageBox = document.getElementById("screen_message_box");
	screenComInfo = document.getElementById("screen_com_info");
	itTurn = document.getElementById("input_text_turn")
	displayCharacterInfo();//info//
    displayRoomInfo();
}
