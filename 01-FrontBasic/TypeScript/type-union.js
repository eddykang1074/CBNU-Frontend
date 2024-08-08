var productCode = "10000";
productCode = 20000;
//파라메터로 숫자/문자둘다 지원하는함수
function getCode(code) {
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
var userData = ["홍길동2", 40, false];
var state = "open";
var oddNumber = 3;
//할당할수 없는 값을 지정하면 에러발생
//let oddNumber2:OddNumbersUnderTen = 2;
