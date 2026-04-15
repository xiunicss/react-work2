"use strict";
// 변수: 타입
let num = 10;
let season = 'summer';
let seasons = ['spring', 'summer', 'autumn', 'winter'];
console.log(seasons[2]); //autumn
//Student의 객체 생성
let student1 = {
    id: 1,
    name: '김선화',
    subjects: [
        { courseId: 101, courseName: "수학", grade: 'B' },
        { courseId: 102, courseName: "영어", grade: 'C' },
    ]
};
console.log(`id: ${student1.id}, name: ${student1.name}`);
student1.subjects.forEach(subject => {
    console.log(`과목명: ${subject.courseName}, 학점: ${subject.grade}`);
});
