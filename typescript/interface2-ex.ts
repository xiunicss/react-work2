// 변수: 타입
let num: number = 10;
let season: string = 'summer'
let seasons: string[] = ['spring', 'summer', 'autumn', 'winter']
console.log(seasons[2]); //autumn

//학점 정의
type Grade = 'A' | 'B' | "C" | "D" | "F";

//과목 객체 정의
interface Course{
    courseId: number;
    courseName: string;
    grade?: Grade; // ? 선택적 속성
}

//학생(Object) 정의
interface Student{
    readonly id: number; //읽기 전용(변경 안됨)
    name: string;
    subjects: Course[]; // []자료형
    // computer: string;
    // math: string;
    // korean:string;
}

//Student의 객체 생성
let student1: Student = {
    id: 1,
    name: '김선화',
    subjects: [
        {courseId: 101, courseName: "수학", grade: 'B'},
        {courseId: 102, courseName: "영어", grade: 'C'},
    ]
}



console.log(`id: ${student1.id}, name: ${student1.name}`);
student1.subjects.forEach(subject => {
    console.log(`과목명: ${subject.courseName}, 학점: ${subject.grade}`);    
})