//새로운 타입을 만드는데 string 타입과 number타입을 둘다 지원하는
//개발자 정의 타입 정의
type StringOrNumber = string | number;

let sample: StringOrNumber;

sample = "안녕하세요";
sample = 11111;

//객체의 타입을 지정하는 방법
//회원데이터 객체의 타입을 미리 정의하고 데이터를 할당해보자..
type MemberType = {
  name: string;
  age: number;
  address: { city: string; country: string };
};

//회원 데이터 객체의 구조를 정의하고 값을 할당해서 퍼슨 객체변수를 할당..
let personData: MemberType = {
  name: "eddy",
  age: 30,
  address: {
    city: "Seoul",
    country: "South Korea",
  },
};

//함수의 파라메터도 정확히 타입을 지정해서 사용하는것을 권장
function printPersonInfo(person: MemberType) {
  console.log(`name:${person.name}`);
}

printPersonInfo(personData);

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

//인풋 데이터 속성 타입
type OperationInput = {
  a: number;
  b: number;
};

//아웃 데이터 속성 타입정의
type OperationOutput = {
  result: number;
};

function addNumbers(input: OperationInput): OperationOutput {
  const { a, b } = input;
  return { result: a + b };
}

const input: OperationInput = { a: 5, b: 3 };
const output: OperationOutput = addNumbers(input);
