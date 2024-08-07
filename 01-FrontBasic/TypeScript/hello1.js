const userId = "hong";
const userName = "홍길동";

function sayHello(userId, userName) {
  //console.log('안녕하세요.'+userName+'님. 아이디는' + userId+'입니다.');
  console.log(`안녕하세요. ${userName}님. 아이디는 ${userId} 입니다.`);
}

sayHello(userId, userName);
