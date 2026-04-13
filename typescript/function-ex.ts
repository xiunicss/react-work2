// 함수의 매개변수 타입
// 함수의 형태 - return이 있는 함수, return이 없는 함수

//return이 있는 함수
/* function add(x: number, y: number){
     return x + y
} */
const add = (x:number, y:number): number => {
    return x + y
}

//함수 호출
const sum = add(5.5, 10.1)
console.log(`합계: ${sum}`);

// return이 없는 함수 - 반환값이 없음(void)
const greet = (name: string): void => {
    console.log(`Hello, ${name}!`);    
}

greet("TypeScript")

// 객체를 반환하는 함수
const creatUser = (id: number, name: string): {id: number, name: string} => {
    return {id, name}
}

const u1 = creatUser(1, "Alice")
console.log(`사용자 ID: ${u1.id}, 이름: ${u1.name}`);


// 함수형 type을 정의
type MathOperation = (a: number, b: number) => number;

// 곱하기
const multiply: MathOperation = (a, b) => a * b
const value1 = multiply(5, 10);

// 나누기
const divide: MathOperation = (a, b) => a / b
const value2 = divide(1000, 2.5)

console.log(`곱: ${value1}`);
console.log(`나누기: ${value2}`);

