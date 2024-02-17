

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];
let arr1 = [
  { id: 4, name: "jony", age: "25", marks: 87 },
  { id: 5, name: "Madhav", age: "21", marks: 38 },
  { id: 6, name: "Soren", age: "24", marks: 51 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((student) =>{
    if(student.marks > 50){
      console.log(student);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
 arr.forEach((student)=>{
  if(student.marks > 50){
    console.log(student);
  }
 })
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4, name:"susan", age:"20", marks:45})
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  const passedStudent = (arr.filter((students) => students.marks >= 50));
  console.log(passedStudent);
}


function concatenateArray() {
  //Write your code here, just console.log
  arr1.forEach((student)=>arr.push(student));
  console.log(arr);
}
