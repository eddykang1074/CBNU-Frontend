let notSure: any = 4; // Type is any
notSure = "maybe a string instead"; // Type is any
notSure = false;

console.log("notSure:", notSure);

let fullName: any = "Eddy.kang";

//변수의 형변환 하기1 <string>fullName 은 fullName을 string타입으로 형변환
let fullNameLength: number = (<string>fullName).length;

//변수의 형변환 하기2;
let fullNameLength2: number = (fullName as string).length;

const companyName = "MSoftware" as string;

//인터페이스는 객체의 구조와 속성의 타입을 지정하는 방법을 제공한다.
interface User {
  id: number;
  name: string;
  email: string;
  telephone?: string; //telephone 속성값은 반드시 입력안해도된다는 선택적속성을 지정할떄는?
}

let user = {} as User;
user.id = 1;
user.name = "kang";
user.email = "test@test.cokr";

console.log("user===>", user);
