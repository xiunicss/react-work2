"use strict";
// type 객체 정의
// 사용
const member1 = {
    id: 1,
    name: "관리자",
    age: 25,
    role: "admin"
};
const member2 = {
    id: 1,
    name: "회원",
    age: 21,
    role: "user"
};
//출력
console.log(`회원1: ${member1.name}, 나이: ${member1.age} \
    권한: ${member1.role}`);
console.log(`회원2: ${member2.name}, 나이: ${member2.age} \
    권한: ${member2.role}`);
