//변수별  타입을 지정하고 값을 할당합니다.
var memberName = "강창훈";
var age = 30;
var price = 5000;
var isMale = true;
var totalPayPrice = 0;
function showTotalPrice(p, count) {
    totalPayPrice = p * count;
    console.log("totalPayPrice: ".concat(totalPayPrice));
}
console.log("사용자명:", memberName);
console.log("나이:", age);
console.log("가격:", price);
console.log("성별:", isMale);
showTotalPrice(price, 2);
