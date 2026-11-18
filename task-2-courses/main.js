const courses = [
  { id: 1, title: "Python Basics", category: "Programming", price: 1200, students: 150 },
  { id: 2, title: "UI/UX Design", category: "Design", price: 1800, students: 90 },
  { id: 3, title: "JavaScript", category: "Programming", price: 1500, students: 200 },
  { id: 4, title: "Photoshop", category: "Design", price: 900, students: 110 },
  { id: 5, title: "Data Science", category: "Programming", price: 2500, students: 75 },
];

const programmingCourses = courses.filter(course => course.category === "Programming");
console.log("Курси з програмування:", programmingCourses);

const coursePrices = courses.map(course => `${course.title} — ${course.price} грн`);
console.log("Назви та ціни курсів:", coursePrices);

const courseWithId4 = courses.find(course => course.id === 4);
console.log("Курс з ID 4:", courseWithId4);

const coursesByStudents = [...courses].sort((a, b) => b.students - a.students);
console.log("Курси за кількістю студентів (за спаданням):", coursesByStudents);

function calculateAveragePrice(courses) {
  if (courses.length === 0) return 0;

  let totalPrice = 0;
  for (const course of courses) {
    totalPrice += course.price;
  }
  return totalPrice / courses.length;
}

console.log("Середня ціна курсу:", calculateAveragePrice(courses), "грн");
