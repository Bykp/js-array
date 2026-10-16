
const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// 1. Повертає імена студентів, які мають оцінку більше 80
function getTopScoringStudents(students) {
  return students
    .filter(function(student) {
      return student.score > 80;
    })
    .map(function(student) {
      return student.name;
    });
}

// 2. Повертає середній вік студентів
function getAverageAge(students) {
  if (students.length === 0) {
    return 0;
  }

  let totalAge = 0;

  for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age;
  }

  return totalAge / students.length;
}

// 3. Додає нового студента до масиву
function addStudent(students, student) {
  students.push(student);
  return students;
}

// 4. Повертає новий масив без студента з указаним ім'ям
function removeStudentByName(students, name) {
  return students.filter(function(student) {
    return student.name !== name;
  });
}

module.exports = {
  getTopScoringStudents,
  getAverageAge,
  addStudent,
  removeStudentByName
};
