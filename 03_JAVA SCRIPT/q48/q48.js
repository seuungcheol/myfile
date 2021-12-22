// Cat 클래스 변수 kitty 를 만들고 이 클래스 변수의 속성 catName 변수에 임의의 값을 넣고(이름 지어주시라는거)
// 위 고양이 이름을 출력하기
new Cat(); //객체

function Cat(name, age, weight, family, color){			
	//속성, 프로퍼티		
	this.name = name;  // 이름		
	this.age = age;    // 나이		
	this.weight = weight; // 몸무게		
	this.family = family;   // 종류	
	this.color = color;     // 털색		
}

var kitty = new Cat("이름 :검냥", "나이 :"+ 2, "몸무게 :" +1, "종류 :페르시아", "색상 :검정");

// kitty.name = "이름 :검냥";
// kitty.age = "나이:" + 2 + "세";
// kitty.weight = "몸무게 :" + 1 + "kg";
// kitty.family ="종류 :페르시아";
// kitty.color ="색상 :검정";

dw(kitty.name);
hr();
dw(kitty.age);
hr();
dw(kitty.weight);
hr();
dw(kitty.family);
hr();
dw(kitty.color);
hr();hr();


var yaongi = new Cat("이름 :흰냥", "나이 :"+ 4, "몸무게 :"+ 1.5, "종류 :페르시아", "색상 :흰");

dw(yaongi.name);
hr();
dw(yaongi.age);
hr();
dw(yaongi.weight);
hr();
dw(yaongi.family);
hr();
dw(yaongi.color);
hr();

if (yaongi.age>kitty.age){
	dw("형님 고양이:" + yaongi.name);
	hr();
	dw("동생 고양이:" + kitty.name);
	
} else if(yaongi.age<kitty.age){
	dw("둘은 동갑");
} else {
	dw("동생 고양이:" + yaongi.name);
	hr();
	dw("형님 고양이:" + kitty.name);
}