
//Q21.They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.


interface itCourse {
    courseName : string;
    location : string;
    onsiteStudents:number;
}

let itCourse = {
    courseName : "TypeScript and JavaScript",
    location : "Governor House, Karachi",
    onsiteStudents: 50000
};

console.log(itCourse);
