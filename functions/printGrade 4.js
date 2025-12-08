export default function printAverageGrade(averageGrade) {
  if (typeof averageGrade !== "number") {
    // throw new Error(`The averageGrade must be a number`);
    console.log(`The averageGrade must be a number`);
    return;
  }

  if (averageGrade < 0 || averageGrade > 100) {
    // throw new Error(`The averageGrade must be between 0 and 100`);
    console.log(`The averageGrade must be between 0 and 100`);
    return;
  }

  let grade;

  if (averageGrade < 60) {
    grade = "Незадовільно";
  } else if (averageGrade <= 70) {
    grade = "Задовільно";
  } else if (averageGrade <= 80) {
    grade = "Добре";
  } else if (averageGrade <= 90) {
    grade = "Дуже добре";
  } else {
    grade = "Відмінно";
  }

  return grade;
}

printAverageGrade(160);
