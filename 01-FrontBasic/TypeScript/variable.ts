//변수별  타입을 지정하고 값을 할당합니다.
var memberName: string = "강창훈";
let age: number = 30;
let price: number = 5000;
const isMale: boolean = true;

let totalPayPrice: number = 0;

function showTotalPrice(p: number, count: number): void {
  totalPayPrice = p * count;
  console.log(`totalPayPrice: ${totalPayPrice}`);
}

console.log("사용자명:", memberName);
console.log("나이:", age);
console.log("가격:", price);
console.log("성별:", isMale);

showTotalPrice(price, 2);
