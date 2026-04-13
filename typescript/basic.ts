
//문자열
let message: string = "hello, world!"
console.log(message);

//숫자
let age: number = 30;
console.log(`나이: ${age}세`);

//불리언
let isStudent: boolean = true;
console.log(`학생인가요? ${isStudent}`);

//배열1. - string[]
let carts: string[] = ['사과', '바나나', '우유'];
console.log(`장바구니: ${carts.join(', ')}`);

//배열2. - Array<string> , Array<numder>
// <T> - 제네릭(generic) 표기
let carts2: Array<string> = ['사과', '바나나', '우유'];
console.log(`장바구니: ${carts.join(', ')}`);