let students = [
  { name: 'Ali', lessons: ['Math', 'Science'], grades: [80, 90] },
  { name: 'Sinan', lessons: ['Math', 'Science'], grades: [50, 70] },
  { name: 'Erdem', lessons: ['Math', 'Science'], grades: [40, 30] },
  { name: 'Elif', lessons: ['Math', 'Science'], grades: [60, 60] }
];

const averages = students.map(s => ({
  name: s.name,
  average: s.grades.reduce((a, b) => a + b, 0) / s.grades.length
}));

console.log(averages);