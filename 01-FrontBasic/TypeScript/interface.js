function greeting(user) {
    return "Hello,".concat(user.name, "!!}");
}
var user = { name: "Alice", age: 20 };
console.log(greeting(user));
var employee = {
    name: "Alice",
    department: "Development",
    address: "경기도 성남시...",
    group: "IT",
};
//Car라는 클래스는 Movable 인터페이스를 상속받아 해당 인터페이스의
//속성과 기능을 클래스내에서 구현(Implements)해야합니다.
var Car = /** @class */ (function () {
    //생성자 함수:생성자함수는 클래스를 통해 객체가 생성되는 시점에 자동으로 호출된는 함수
    //클래스를 이용해 객체를 만들어 내는 과정 new Car()을 인스턴스화 한다라고 표현합니다.
    function Car(speed) {
        //this는 현재 클래스내부에 접근하기 위한 예약어이고
        //this.speed는 클래스내 내부속성인 상단에 클래스내에 정의된 speed속성이고
        //뒤에 오는 speed는 객체를 생성하는 시점에 new Car(500); 생성자함수로 전달되는 속도값 파라메터입니다.
        this.speed = speed;
    }
    Car.prototype.move = function () {
        console.log("\uD604\uC7AC \uC790\uB3D9\uCC28\uB294 ".concat(this.speed.toString(), " km \uC18D\uB3C4\uB85C \uC774\uB3D9\uC911\uC785\uB2C8\uB2E4."));
    };
    return Car;
}());
//클래스를 이용해 myCar라는 객체(Object)를 생성합니다.
//new 연산자를 이용해 클래스의 객체를 만들고 만들어진 객체는
//프로그램이 실행되는 컴퓨터의 메모리에 저장되며 이러한 과정을 인스턴스화 라고 표현합니다.
//클래스는 인스턴화 될떄 클래스내 정의된 생성자함수가 자동으로 실행되고 해당 함수에 파라메터를 전달할수 있다.
var myCar = new Car(100);
console.log("내차의 현재 속도:", myCar.speed);
myCar.move();
