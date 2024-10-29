// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메소드
class Employee {
	// 생성자
	constructor(
		//
		private empName: string,
		private age?: number,
		private empJob?: string
	) {}

	// getter
	public get getEmpName(): string {
		return this.empName;
	}

	// setter
	public set setEmpName(val: string) {
		this.empName = val;
	}

	printEmp(): void {
		console.log(
			`이름: ${this.empName}
      나이: ${this.age ?? '알 수 없음'}
      직업: ${this.empJob ?? '알 수 없음'}`
		);
	}
}

const employee1 = new Employee('kim', 30, '개발자');
employee1.setEmpName = 'lee';
employee1.printEmp();
