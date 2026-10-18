//day2
// console.log("Hello, World!");

// console.log(3 + 4);
// let score=10;
// score=5;
// console.log("Updated score:",score);

//day3
const bikes=[{name:"Domi250",cc:250},{name:"R15",cc:155},{name:"RC200",cc:200},{name:"Java42",cc:350},{name:"Pulsar",cc:150}];
const passed= bikes.filter((s)=>s.cc>=200).map((s)=>s.name).sort().reverse().join(" - ");
console.log(passed);

// const student={name:"Mohammed Absar A",age:250,
//     greet(){return "Hi ,I'm "+this.name}};
//     const student1={name:" sivadinesh",age:250,
//     greet(){return "Hi ,I'm "+this.name}};
// console.log(student.greet());
// const {age}=student
// const {name}=student1
// console.log(age);
// console.log(name);

// student.dept="CSE";
// console.log(student);

// delete student.dept;
// console.log(student);

// student.age=22;
// console.log(student);

