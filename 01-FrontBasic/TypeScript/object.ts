const user: { id: number; name: string; email: string; telephone?: string } = {
  id: 2,
  name: "강창훈",
  email: "test@test.co.kr",
  telephone: "010-2760-5246",
};

//객체 타입을 정의하는 방법1: 인터페이스를 이용하는 방법
//일반적인 현업 코딩 컨벤션(코딩규칙)으로 json data와 같은 data객체들은 주로 인터페이스로 타입을 정의하는 편임.
interface User {
  id: number;
  name: string;
  email: string;
  telephone?: string; //선택적 속성타입으로 정의(값이꼭 전달안되어도됨)
}

//객체 타입을 정의하는 방법2: type alias 를 이용하는 방법
type UserType = {
  id: number;
  name: string;
  email: string;
  telephone?: string;
};

let user3: User = {
  id: 3,
  name: "강창훈3",
  email: "test@test.co.kr",
};

let user4: UserType = {
  id: 3,
  name: "강창훈3",
  email: "test@test.co.kr",
};
