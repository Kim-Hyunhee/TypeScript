// 멤버 변수 == 속성 == 프로퍼티
// 멤버 함수 == 메소드

class Employee {
  empName: string;
  age: number;
  empJob: string;

  printEmp = (): void => {
    console.log(
      this.empName +
        "의 나이는 " +
        this.age +
        "이고, 직업은 " +
        this.empJob +
        "입니다."
    );
  };
}

let employee1 = new Employee();
employee1.empName = "kim";
employee1.age = 20;
employee1.empJob = "개발자";

employee1.printEmp();
