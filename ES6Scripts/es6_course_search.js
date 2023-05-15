//write code that searches the ourses array using *find()* or *filter()*

//When does the PROG200 course start?
//What is the title of the PROJ500 course?
//What are the titles of the courses that cost $50 or less?
//What classes meet in "Classroom 1"?

let courses = [
 {
 CourseId: "PROG100",
 Title: "Introduction to HTML/CSS/Git",
 Location: "Classroom 7",
 StartDate: "09/08/22",
 Fee: "100.00",
 },
 {
 CourseId: "PROG200",
 Title: "Introduction to JavaScript",
 Location: "Classroom 9",
 StartDate: "11/22/22",
 Fee: "350.00",
 },
 {
 CourseId: "PROG300",
 Title: "Introduction to Java",
 Location: "Classroom 1",
 StartDate: "01/09/23",
 Fee: "50.00",
 },
 {
 CourseId: "PROG400",
 Title: "Introduction to SQL and Databases",
 Location: "Classroom 7",
 StartDate: "03/16/23",
 Fee: "50.00",
 },
 {

 CourseId: "PROJ500",
 Title: "Introduction to Angular",
 Location: "Classroom 1",
 StartDate: "04/25/23",
 Fee: "50.00",
 }
];

//passes course and is one single course 
// loops over array
function findPROG200(course){
    return course.CourseId == "PROG200";
}
//use find method to find PROG200
const prog200 = courses.find(findPROG200)
console.log("PROG200 starts: ", prog200.StartDate)

console.log("------------------------------")

function titlePROJ500(course){
    return course.CourseId == "PROJ500";
}
const proj500 = courses.find(titlePROJ500)
console.log("PROJ500 Title: ", proj500.Title)

console.log("------------------------------")

function isUnder50 (course){
    return +course.Fee <= 50;
}

const LessTitle = courses.filter(isUnder50)
console.log("Cost 50 or less: ")
for (const course of LessTitle){
 console.log('', course.Fee, course.Title)
}
console.log("------------------------------")

function locationClassroom1 (course){
    return course.Location == "Classroom 1";
}

const classesMeet = courses.filter(locationClassroom1)
console.log("Classes that meet in Classroom 1: ")
for (const course of classesMeet){
    console.log('', course.Location, course.Title)
}

//another way:
// for ( let i = 0; i < classsesMeet.Lenght ; i ++){
//     const course = classesMeet[i];
//     console.log('', course.Title);
// }