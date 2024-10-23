// 멤버 변수 == 속성 == 프로퍼티
// 멤버 함수 == 메소드
var Employee = /** @class */ (function () {
    //   private _empName: string;
    //   private _age: number;
    //   private _empJob: string;
    function Employee(_empName, _age, _empJob) {
        var _this = this;
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
        this.printEmp = function () {
            console.log(_this._empName +
                "의 나이는 " +
                _this._age +
                "이고, 직업은 " +
                _this._empJob +
                "입니다.");
        };
    }
    Object.defineProperty(Employee.prototype, "empName", {
        // get/set => 데이터 직접 접근X, 특정 메소드를 통해 접근
        get: function () {
            return this._empName;
        },
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
// public private protected => 데이터 접근 제한
var employee1 = new Employee("kim", 30, "소프트웨어개발자");
employee1.empName = "lee";
employee1.printEmp();
