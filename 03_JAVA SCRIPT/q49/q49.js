new Cat();
var kitty = new Cat("흰", 1, 1, "허스키", "흰", "냐~~~~옹");

function Cat(name, age, weight, family, color, crying){			
	//속성, 프로퍼티		
	this.name = name;  // 이름		
	this.age = age;    // 나이		
	this.weight = weight; // 몸무게		
	this.family = family;    // 종류	
	this.color = color;	     // 털색	

	this.crying = function(){
		dw(crying);
		hr();
		hr();
	}   //울음소리
}


kitty.crying();