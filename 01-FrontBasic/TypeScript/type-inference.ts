var memberName = "강창훈";
var price = 5000;
var isMale = true;

console.log(
  "회원명은 타입추론에 의해 문자로 컴파일시 자동인식됨:",
  memberName.length
);
//console.log("가격은 타입추론에 의해 숫자로 컴파일시 자동인식됨:",price.length);

var user = {
  id: 1,
  name: "강창훈",
  email: "test@test.co.kr",
};

console.log("user의 타입추론:", user.name.length);
//console.log("user의 타입추론:",user.id.length);

function plus(a: number, b: number) {
  return a + b;
}

console.log(plus(1, 2));
//console.log(plus(1,2).length);
