function Monster(name, hp, attack){		
	this.name = name;   // 이름		
	this.hp = hp;    // 체력
	this.full = hp;   //총 체력
	this.attack = attack;  // 공격

	this.info = function(){
		dw("이름 : "+this.name+"<br>"+"체력 : "+"("+this.full+"/"+this.hp+")"+"<hr>");
	}					
}