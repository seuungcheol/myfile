// 함수를 7을 넣어 호출하기
function a(x){
    var y = x + 1;
    return y;
}

a(7);
// 또 다른 문43 함수를 하나 더 호출하면서 이 함수의 매개변수에 위 함수(바로 윗행 함수)를 넣기
a(a(7));
var result = a(a(7));
dw(result);