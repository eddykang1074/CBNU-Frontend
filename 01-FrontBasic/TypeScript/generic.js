function getRendomElement(list) {
    //전달된 배열목록에서 랜덤하게 배열 단일아이템을 반환한다.
    var randIndx = Math.floor(Math.random() * list.length);
    return list[randIndx];
}
//문자열 배열전용 랜덤 문자추출기 함수
function getRendomString(list) {
    //전달된 배열목록에서 랜덤하게 배열 단일아이템을 반환한다.
    var randIndx = Math.floor(Math.random() * list.length);
    return list[randIndx];
}
function getRendomNumber(list) {
    //전달된 배열목록에서 랜덤하게 배열 단일아이템을 반환한다.
    var randIndx = Math.floor(Math.random() * list.length);
    return list[randIndx];
}
//특정타입에 최적화된 함수를 별도로 만들고 사용하기
var randomString = getRendomString(["A", "B", "C"]);
console.log("문자열 배열에서 랜덤한 문자 추출하기:", randomString);
//특정타입에 최적화된 함수를 별도로 만들고 사용하기
var randomNumber = getRendomNumber([1, 2, 3]);
console.log("숫자 배열에서 랜덤한 숫자 추출하기:", randomNumber);
//제너릭 타입을 이용한 타입에 제한없이 사용가능함 함수사용하기
var randomString1 = getRendomElement(["A", "B", "C"]);
var randomNumber1 = getRendomElement([1, 2, 3]);
var randomUser1 = getRendomElement([
    { id: 1, name: "사용자1", email: "test1@test.co.kr" },
    { id: 1, name: "사용자2", email: "test1@test.co.kr" },
    { id: 1, name: "사용자3", email: "test1@test.co.kr" },
]);
//Genertic기반으로 타입에 의존적이지 않은 함수 하나를 만들어 획기적으로 코딩량을 줄이고
//재사용가능한 코드를 만들어
//유지보수 효과를 극대화할수 있다.
console.log("getRendomElement-string", randomString1);
console.log("getRendomElement-number", randomNumber1);
console.log("getRendomElement-UserType", randomUser1);
