function Character(name, hp, attack,fullExp,exp){		
	this.name = name;   	
	this.hp = hp;
	this.full = hp;   //총 체력    		
	this.attack = attack;
	this.fullExp = fullExp; //필요 경험치
	this.exp = exp;
	

	this.info = function(){
		dw("이름 : "+this.name+"\n"+"체력 : "+"["+this.hp+"/"+this.full+"]"+"\n"+"경험치 : "+"["+this.exp+"/"+this.fullExp+"]"+"\n\n");
	}					
}
