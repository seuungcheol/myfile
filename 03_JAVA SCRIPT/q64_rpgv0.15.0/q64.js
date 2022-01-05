var screenMessageBox;
var screenPlayerInfo;
var screenComInfo;
var orc = new Monster("오크", 1500, 350, 500, 100);
var elf = new Character("엘프", 1000, 500, 1500, 0);
var turnCount = 1;
var itTurn;  //현재 턴 표시 input text 변수
var currentTurnType = "대기" //현재 플레이 상태를 표시하는 변수 (전투, 비전투)

window.onload = function(){
	screenPlayerInfo = document.getElementById("screen_player_info");
	screenMessageBox = document.getElementById("screen_message_box");
	screenComInfo = document.getElementById("screen_com_info");
	itTurn = document.getElementById("input_text_turn")
	displayCharacterInfo();//info//
	
	// tv("전투 시작!!\n\n");
	

	//무한 전투 모드
	// var rotation = true
	// while (rotation){
	// 	rotation = battleTurn();
	// }
}


// - 최초 turnCount 값을 0에서 1로 수정
// - 이동 버튼 추가(동, 서, 남, 북, 위, 밑)
// - 이동 함수들을 추가( 함수에서 이동 메세지 출력과 턴진행 수행 )
// - 처음에 currentMode 값을 "대기" 로 수정하여 전투가 바로 시작되지 않도록 수정함
// - 전투시작 메시지 삭제 (추후 전투모드 전환 시 재추가 예정 )
// - procNormalTurn() 내 텍스트 삭제 함수 tvClear() 제거
// - procNormalTurn() 내에 메세지 출력 변경. "특별한 것은 보이지 않는다.\n"