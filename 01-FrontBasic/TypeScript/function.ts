function add1(a: number, b: number): number {
  return a + b;
}

function add2(a: number, b: number): void {
  console.log("결과값:", a + b);
}

const result1: number = add1(10, 10);

const data1: number = 20;
const data2: number = 30;
add2(data1, data2);

//일반함수: function 함수명(){}
function greeting1(name: string): string {
  return `Hello~~${name}님...`;
}

//익명함수
let greeting2 = function (name: string): string {
  return `Hello~~${name}님...`;
};

//화살표함수
let greeting3 = (name: string): string => {
  return `Hello~~${name}님...`;
};

console.log(greeting1("홍길동1"));
console.log(greeting2("홍길동2"));
console.log(greeting3("홍길동3"));

//선택적(optional) 속성/변수??선언하기 = 해당값을 반드시 전달할 필요없고 전달해도 안해도 되고...
function greet(name: string = "Guest", msg?: string): string {
  if (msg) {
    return `${name}님 ${msg}`;
  } else {
    return `Hello~~${name}`;
  }
}

console.log(greet());
console.log(greet("강창훈"));
console.log(greet("강창훈", "수고가 많으세요."));

//plus 함수의 구조를 타입으로 정의해보자
//함수 타입명 =(매개변수타입정의)=>함수 반환값타입;
type CalFunctionType = (a: number, b: number) => number;

//함수의 구조를 타입으로 정의하고 함수를 구현해보자
function plus(a: number, b: number): number {
  return a + b;
}

function minus(a: number, b: number): number {
  return a - b;
}

//자바스크립트 함수는 특정함수의 매개변수로 전달가능합니다.
//자바스크립트 함수는 객체타입임..
//특정함수를 특정함수의 매개변수로 전달하고 매개변수의 타입을 지정해보자
//calculate()함수에 계산함수를 매개변수로 전달하고 로직처리를 전달된 매개변수함수를
//통해서 계산로직을 처리해서 해당 계산함수의 결과값을 반환한다.
function calculate(a: number, b: number, calFunc: CalFunctionType) {
  return calFunc(a, b);
}

//calculate()함수를 실행해보자
calculate(400, 10, plus);

calculate(400, 10, minus);

function calculate1(
  a: number,
  b: number,
  calFunc: (a: number, b: number) => number
) {
  return calFunc(a, b);
}
