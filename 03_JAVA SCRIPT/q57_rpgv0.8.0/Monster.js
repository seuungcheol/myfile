function Monster(name, hp, attack, exp, gold){		
	this.name = name;   // 이름		
	this.hp = hp;    // 체력
	this.full = hp;   //총 체력
	this.attack = attack;  // 공격
	this.exp = exp;   //경험치
	this.gold = gold;

	this.info = function(){
		dw("이름 : "+this.name+"<br>"+"체력 : "+"["+this.hp+"/"+this.full+"]"+"<hr>");
	}					
}