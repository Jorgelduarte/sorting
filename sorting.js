var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function (a, b) {
    // The result will be the same without the first if. However, I left it because to help fully understand how can I organiza by numers
    if (a.name === b.name) {
        return b.age - a.age;
    }
    if (a.name < b.name) {
        return -1;
    } else { 
        return 1;
    }
});

console.log(students)