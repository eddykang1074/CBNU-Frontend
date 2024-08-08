function add1(a, b) {
    return a + b;
}
function add2(a, b) {
    console.log("결과값:", a + b);
}
var result1 = add1(10, 10);
var data1 = 20;
var data2 = 30;
add2(data1, data2);
//일반함수: function 함수명(){}
function greeting1(name) {
    return "Hello~~".concat(name, "\uB2D8...");
}
//익명함수
var greeting2 = function (name) {
    return "Hello~~".concat(name, "\uB2D8...");
};
//화살표함수
var greeting3 = function (name) {
    return "Hello~~".concat(name, "\uB2D8...");
};
console.log(greeting1("홍길동1"));
console.log(greeting2("홍길동2"));
console.log(greeting3("홍길동3"));
//선택적(optional) 속성/변수??선언하기 = 해당값을 반드시 전달할 필요없고 전달해도 안해도 되고...
function greet(name, msg) {
    if (name === void 0) { name = "Guest"; }
    if (msg) {
        return "".concat(name, "\uB2D8 ").concat(msg);
    }
    else {
        return "Hello~~".concat(name);
    }
}
console.log(greet());
console.log(greet("강창훈"));
console.log(greet("강창훈", "수고가 많으세요."));
