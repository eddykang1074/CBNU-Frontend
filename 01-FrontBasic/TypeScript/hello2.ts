const userId: string = "hong";
const userName: string = "홍길동";

function sayHello(userId: string, userName: string): void {
  console.log(`안녕하세요. ${userName}님. 아이디는 ${userId}입니다.`);
}

sayHello(userId, userName);
