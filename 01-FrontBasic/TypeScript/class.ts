class Animal {
  //일반화된 특성(속성) 정의
  name: string;

  //일반화된 기능정의 및 구현
  move() {
    console.log(`${this.name} 움직이고 있어요.`);
  }

  //생성자 함수 정의
  constructor(externalName: string = "") {
    this.name = externalName;
  }
}

//클래스는 클래스를 상속받아 기능과/속성을 확장(extends)할수 있어요.
class Dog extends Animal {
  bark() {
    console.log(`${this.name} 짖고 있어요.`);
  }
}

let myDog = new Dog("누렁이");
console.log("내 강아지의 이름:", myDog.name);
myDog.move();
myDog.bark();

//클래스는 인터페이스를 상속받으면 반드시 인터페이스의 기능과 속성을 구현(implements)해줘야한다.
//인터페이스는 직접적인 기능구현을 하지 않고 형식만 정의해서 해당 형식을 구현하거나 확장할수 있는
//방법을 제공합니다.
interface Movable {
  speed: number;
  move(): void;
}

//Car라는 클래스는 Movable 인터페이스를 상속받아 해당 인터페이스의
//속성과 기능을 클래스내에서 구현(Implements)해야합니다.
class Car implements Movable {
  speed: number;

  //생성자 함수:생성자함수는 클래스를 통해 객체가 생성되는 시점에 자동으로 호출된는 함수
  //클래스를 이용해 객체를 만들어 내는 과정 new Car()을 인스턴스화 한다라고 표현합니다.
  constructor(speed: number) {
    //this는 현재 클래스내부에 접근하기 위한 예약어이고
    //this.speed는 클래스내 내부속성인 상단에 클래스내에 정의된 speed속성이고
    //뒤에 오는 speed는 객체를 생성하는 시점에 new Car(500); 생성자함수로 전달되는 속도값 파라메터입니다.
    this.speed = speed;
  }

  move() {
    console.log(
      `현재 자동차는 ${this.speed.toString()} km 속도로 이동중입니다.`
    );
  }
}

//클래스를 이용해 myCar라는 객체(Object)를 생성합니다.
//new 연산자를 이용해 클래스의 객체를 만들고 만들어진 객체는
//프로그램이 실행되는 컴퓨터의 메모리에 저장되며 이러한 과정을 인스턴스화 라고 표현합니다.
//클래스는 인스턴화 될떄 클래스내 정의된 생성자함수가 자동으로 실행되고 해당 함수에 파라메터를 전달할수 있다.
let myCar = new Car(100);
console.log("내차의 현재 속도:", myCar.speed);
myCar.move();

//접근제어자 (access modifier) 사용 및 이해하기
enum UserType {
  Admin = "admin",
  User = "user",
}

enum AdminRole {
  SystemAdmin = "SA",
  GeneralAdmin = "GA",
}

class User {
  //클래스의 공통속성을 정의한다.
  public name: string; //클래스 외부에 노출되는 속성
  private password: string; //클래스 내에서만 사용가능한  속성
  protected email: string; //해당 클래스를 상속받은 자식클래스에서만 접근이 가능한 속성
  protected userType: UserType;

  //생성자 함수 정의하기
  constructor(name: string, password: string, email: string) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.userType = UserType.User;
  }

  //클래스의 주요 기능을 구현한다.
  //클래스 외부에서 호출가능
  public greeting() {
    console.log(`안녕하세요.저는 ${this.name}입니다.`);
  }

  private config() {
    this.sendEmail("개인화 정보를 설정했습니다.");
    console.log(
      "개인화 정보가 설정되었습니다. 메일로 관련내용을 전송했습니다."
    );
  }

  protected sendEmail(message: string) {
    console.log(`메일이 전송되었습니다.내용:${message}`);
  }

  //접근제어자를 정의하지 않으면 기본이 public 적용
  changePassword(newPassword: string) {
    this.password = newPassword;
    console.log("암호가 새로운값으로 변경되었습니다.");
  }
}

let user = new User("강창훈", "1234", "test@test.co.kr");
user.greeting();
console.log("현재 사용자의 이름:", user.name);

user.name = "에디";
console.log("현재 사용자의 이름:", user.name);

//접근제어자가 private 선언되어 있어서 객체가 생성된후 외부에서 접근불가함:에러발생
//user.password = "1234";

//에러발생 : protected 속성은 해당 클래스를 상속받은 자식클래스 객체에서면 접근가능
//user.email

//changePassword는 public 접근가능
user.changePassword("12345678");

//public 함수는 접근가능
user.greeting();

//하기 함수기능은 접근불가-에러발생
//user.config()
//user.sendEmail();

class AdminUser extends User {
  private adminRole: AdminRole;

  //생성자 함수 정의하기
  constructor(
    name: string,
    password: string,
    email: string,
    adminRole?: AdminRole
  ) {
    //super메소드는 부모클래스의 생성자함수를 호출하는것..
    super(name, password, email);

    //user부모 클래스의 name속성
    this.name = name;

    //User클래스에서 PRIVATE으로 선언된 속성은 해당 클래스내에서만 사용가능하므로 에러...
    //this.password = password;

    //부모클래스에서 protected로 정의되었기에 자식클래스인 AdminUser에서 사용가능...
    this.email = email;
    this.userType = UserType.User;
  }

  changeRoleType(roleType: AdminRole) {
    console.log("관리자 역할이 변경됩니다.", roleType);
    this.adminRole = roleType;

    //부모 클래스인 User에서 protected정의된 sendEmail함수는 자식클래스에서 사용가능하다.
    this.sendEmail("관리자 역할이 변경되었습니다.");
  }
}

let admin1 = new AdminUser("Admin", "123456", "admin@example.com");
//admin1.userType = UserType.Admin;  userType 속성 접근불가 에러발생
//admin1.changeUserType(UserType.Admin); //changeUserType() 메소드를 통해 부모 클래스의 속성값을 변경
admin1.changeRoleType(AdminRole.SystemAdmin); //관리자 역할 을 바꾸려면

//admin1.sendEmail("test"); //protected 속성은 상속받은 클래스 안에서만 접근가능//에러발생

// 선택적 매개변수를 이용한 클래스 생성자 함수 오버로딩처럼 구현하기
let admin2 = new AdminUser(
  "Admin",
  "123456",
  "admin@example.com",
  AdminRole.SystemAdmin
);
