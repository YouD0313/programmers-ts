var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 변수의 데이터 타입 명시
var stdId = 1111;
var stdName = 'lee';
var age = 20;
var gender = 'male';
var course = 'TypeScript';
var completed = false;
// 열거형: 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 91011;
        this.stdName = 'kim';
        this.age = 30;
        // gender: 'male' | 'female' = 'male';
        this.gender = 'male'; // 리터럴 타입
        this.course = 'node.js';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정: ' + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
// myInstance.setName('엘리스');
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'lee',
        // age: 20,
        gender: 'female',
        course: 'javascript',
        completed: true,
    };
}
var std = {
    stdId: 91011,
    stdName: 'kim',
    age: 30,
    gender: 'male',
    course: 'node.js',
    completed: true,
};
function setInfo(student) {
    console.log(student);
}
// setInfo(std);
// console.log(getInfo(5678));
// 함수의 데이터 타입 명시 (매개변수, 리턴값)
function plus(a, b) {
    // return a + b;
}
var numStr = 100;
var item;
function convertToString(val) {
    // typeof operator
    if (typeof val === 'number') {
        // 타입가드
        item = val;
    }
    else {
        item = 0;
    }
    return String(val);
}
function convertToNumber(val) {
    return Number(val);
}
// console.log(convertToString(numStr)); // '100'
// console.log(convertToNumber(numStr)); // 100
// 일반 배열
var numbers = [1, 2, 3, 4, 5];
var fruits = ['apple', 'banana', 'orange'];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// 배열의 유니온 타입
var mixedArray = [1, 'two', 3, 'four'];
for (var i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}
var infer = [1, 2, 3]; // 타입추론
for (var i = 0; i < infer.length; i++) {
    console.log(infer[i]);
}
// 읽기전용 배열 - 수정불가
var readOnlyArray = [1, 2, 3];
// 튜플 : 타입의 순서가 정해져 있다.
var greeting = [1, 'hello', true];
for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}
// Spread 연산자
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
var combineArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
for (var i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
