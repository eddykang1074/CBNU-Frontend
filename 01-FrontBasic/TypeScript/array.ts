const books: string[] = [];
books.push("헨리6세");
books.push("세종대왕");
books.push("선조");

console.log("책목록:", books);

const userData1 = ["홍길동", 20, true];

//배열내 다양한 데이터 타입을 정의해서 사용한다.
const userData2: (string | number | boolean)[] = ["홍길동", 20, true];

//무조건 배열내 첫번쨰,두번쨰,세번쨰 데이터는 문자열,숫자형,불린형 타입이 와야한다고 제약...
const userData3: [string, number, boolean] = ["홍길동", 20, true];
