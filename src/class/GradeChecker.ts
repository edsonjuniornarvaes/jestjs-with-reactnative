module.exports = class GradeChecker {
  static average(...grades: number[]) {
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / grades.length;

    return average;
  }

  static average2(...grades: number[]) {
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / grades.length;
  
    if (average === 3 || average === 4 || average === 5) return false

    return average;
  }
};