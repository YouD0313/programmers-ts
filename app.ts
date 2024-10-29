// 변수의 데이터 타입 명시
let stdId: number = 1111;
let stdName: string = 'lee';
let age: number = 20;
let gender: string = 'male';
let course: string = 'TypeScript';
let completed: boolean = false;

// 열거형: 사용자 정의 타입
enum GenderType {
	Male = 'male',
	Female = 'female',
}

interface student {
	stdId: number;
	stdName?: string;
	age?: number; // 선택적 프로퍼티
	gender?: 'male' | 'female'; // 리터럴 타입
	course?: string;
	completed?: boolean;
	// setName(name: string): void;
	setName?: (name: string) => void;
	// getName: () => string;
}

class MyStudent implements student {
	stdId = 91011;
	stdName = 'kim';
	age = 30;
	// gender: 'male' | 'female' = 'male';
	gender = 'male' as const; // 리터럴 타입
	course = 'node.js';
	completed = true;

	setName(name: string): void {
		this.stdName = name;
		console.log('이름 설정: ' + this.stdName);
	}
}

const myInstance = new MyStudent();
// myInstance.setName('엘리스');

function getInfo(id: number): student {
	return {
		stdId: id,
		stdName: 'lee',
		// age: 20,
		gender: 'female',
		course: 'javascript',
		completed: true,
	};
}

let std = {
	stdId: 91011,
	stdName: 'kim',
	age: 30,
	gender: 'male',
	course: 'node.js',
	completed: true,
};

function setInfo(student: student): void {
	console.log(student);
}

// setInfo(std);
// console.log(getInfo(5678));

// 함수의 데이터 타입 명시 (매개변수, 리턴값)
function plus(a: number, b?: number): void {
	// return a + b;
}

type strOrNum = number | string; // as 타입별칭

let numStr: strOrNum = 100;
let item: number;

function convertToString(val: strOrNum): string {
	// typeof operator
	if (typeof val === 'number') {
		// 타입가드
		item = val;
	} else {
		item = 0;
	}
	return String(val);
}

function convertToNumber(val: strOrNum): number {
	return Number(val);
}

// console.log(convertToString(numStr)); // '100'
// console.log(convertToNumber(numStr)); // 100

// 일반 배열
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ['apple', 'banana', 'orange'];
for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// 배열의 유니온 타입
let mixedArray: (number | string)[] = [1, 'two', 3, 'four'];
for (let i = 0; i < mixedArray.length; i++) {
	console.log(mixedArray[i]);
}

let infer = [1, 2, 3]; // 타입추론
for (let i = 0; i < infer.length; i++) {
	console.log(infer[i]);
}

// 읽기전용 배열 - 수정불가
let readOnlyArray: ReadonlyArray<number> = [1, 2, 3];

// 튜플 : 타입의 순서가 정해져 있다.
let greeting: [number, string, boolean] = [1, 'hello', true];
for (let i = 0; i < greeting.length; i++) {
	console.log(greeting[i]);
}

// Spread 연산자
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
let combineArray = [...firstArray, ...secondArray];
for (let i = 0; i < combineArray.length; i++) {
	console.log(combineArray[i]);
}
