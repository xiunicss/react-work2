
// 객체의 형태 정의 - interface
/* 
interface Person {
    name: string;
    age: number;
}

// Person 객체 사용
let person: Person = {
    name: "우영우", 
    age: 25
}

let person2: Person = {
    name: "홍길동", 
    age: 28
}


console.log(`이름: ${person.name}, 나이: ${person.age}`);
console.log(`이름: ${person2.name}, 나이: ${person2.age}`);
*/

// ? (선택적 속성을 의미)
//readonly 속성은 변경 불가
interface User {
    readonly id: number; //읽기 전용
    name: string;
    age?: number;
}

// User 객체 사용
let user1: User = {id: 1, name: "김철수"};
let user2: User = {id: 2, name: "이영희", age: 28};

user2.name = "박상희"; //이름 변경
// user2.id = 3; 

//출력
console.log(`이름: ${user1.name}`);
console.log(`이름: ${user2.name}, 나이: ${user2.age}`);
