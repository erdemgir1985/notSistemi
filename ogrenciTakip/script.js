let students = [
  { name: 'Ali', lessons: ['Math', 'Science'], grades: [80, 90] },
  { name: 'Sinan', lessons: ['Math', 'Science'], grades: [50, 70] },
  { name: 'Erdem', lessons: ['Math', 'Science'], grades: [40, 30] },
  { name: 'Elif', lessons: ['Math', 'Science'], grades: [60, 60] }
];

// const averages = students.map(s => ({
//   name: s.name,
//   average: s.grades.reduce((a, b) => a + b, 0) / s.grades.length
// }));

// console.log(averages);
 

//! Cozumunuz dogru  ama fonsiyon kullanmaliyiz birden fazla ogrenci oldugu icin

function calculateGrade(student)
{
 let total = student.grades.reduce((ort, grade) => ort + grade, 0);  
 let average = total / student.grades.length;
 return average;    

}
calculateGrade(students[0]);
console.log('Ortalama Not: ' + calculateGrade(students[0])); 

// Note : reduce methodu dizideki elemanları tek bir değere  dusurmek  için kullanılır.
// Ornegin bir dizide birden cok sayi var ve toplama cikarma yapilicka ise reduce methodu kullanılır.

function passedStudent(student) {
  return calculateGrade(student) >= 50;
}

let passed = students.filter(passedStudent);
let failed = students.filter(s => !passedStudent(s));

passed.map(s => s.name).forEach(name => console.log(name + " geçti"));
failed.map(s => s.name).forEach(name => console.log(name + " kaldı"));


