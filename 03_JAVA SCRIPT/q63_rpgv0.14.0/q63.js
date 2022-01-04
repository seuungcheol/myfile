var screenMessageBox;
var screenPlayerInfo;
var screenComInfo;
var orc = new Monster("오크", 1500, 350, 500, 100);
var elf = new Character("엘프", 1000, 500, 1500, 0);
var turnCount = 0;
var itTurn;  //현재 턴 표시 input text 변수
var currentTurnType = "전투" //현재 플레이 상태를 표시하는 변수 (전투, 비전투)

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