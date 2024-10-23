// 멤버 변수 == 속성 == 프로퍼티
// 멤버 함수 == 메소드

class Employee {
  //   private _empName: string;
  //   private _age: number;
  //   private _empJob: string;

  constructor(
    private _empName: string,
    private _age: number,
    private _empJob: string
  ) {}

  // get/set => 데이터 직접 접근X, 특정 메소드를 통해 접근
  get empName() {
    return this._empName;
  }

  set empName(val: string) {
    this._empName = val;
  }

  printEmp = (): void => {
    console.log(
      this._empName +
        "의 나이는 " +
        this._age +
        "이고, 직업은 " +
        this._empJob +
        "입니다."
    );
  };
}

// public private protected => 데이터 접근 제한

let employee1 = new Employee("kim", 30, "소프트웨어개발자");
employee1.empName = "lee";
employee1.printEmp();
