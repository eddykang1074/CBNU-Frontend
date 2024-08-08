let productCode: string | number = "10000";
productCode = 20000;

//파라메터로 숫자/문자둘다 지원하는함수
function getCode(code: number | string): string {
  //파라메터로 전달된 코드의 데이터 타입이 숫자형이면 숫자형을 문자로 변화하고 문자열을 반환한다.
  if (typeof code === "number") {
    code = "P-" + code.toString();
  }
  return code;
}

//동일한 함수인데 숫자를 전달하는경우
console.log("getcode:", getCode(1000));

//동일한 함수인데 문자를 전달하는경우
console.log("getcode:", getCode("P-1000"));

//배열내의 값들에 대한 타입을 다양하게 지정하고 제한할수 있다.
const userData: (string | number | boolean)[] = ["홍길동2", 40, false];

//type선언자를 이용해 개발자가 원하는 타입을 정의하고 사용할수 있다.
//특정값으로 데이터 값을 제한할수 있다.
type ProcessStates = "open" | "closed";

let state: ProcessStates = "open";

//특정값만 설정할수 있는 type변수에 할당할수 없는값을 지정하면 에러발생
//let state1:ProcessStates = "open1";

type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
let oddNumber: OddNumbersUnderTen = 3;

//할당할수 없는 값을 지정하면 에러발생
//let oddNumber2:OddNumbersUnderTen = 2;
