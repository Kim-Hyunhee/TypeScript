// 멤버 변수 == 속성 == 프로퍼티
// 멤버 함수 == 메소드
var Employee = /** @class */ (function () {
    function Employee() {
        var _this = this;
        this.printEmp = function () {
            console.log(_this.empName +
                "의 나이는 " +
                _this.age +
                "이고, 직업은 " +
                _this.empJob +
                "입니다.");
        };
    }
    return Employee;
}());
var employee1 = new Employee();
employee1.empName = "kim";
employee1.age = 20;
employee1.empJob = "개발자";
employee1.printEmp();
