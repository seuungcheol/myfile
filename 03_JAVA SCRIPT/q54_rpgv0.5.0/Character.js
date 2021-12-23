function Character(name, hp, attack){		
	this.name = name;   	
	this.hp = hp;
	this.full = hp;   //총 체력    		
	this.attack = attack;  

	this.info = function(){
		dw("이름 : "+this.name+"<br>"+"체력 : "+"("+this.full+"/"+this.hp+")"+"<hr>");
	}					
}
