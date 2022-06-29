function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student();
let student2 = new Student();
let student3 = new Student();

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if(this.marks === undefined) { 
      this.marks = [];
      this.marks.push(mark);
    } else {
      this.marks.push(mark);
    } 
}

Student.prototype.addMarks = function (mark1,mark2,mark3,...rest) {
    if(this.marks === undefined) { 
      this.marks = [];
      this.marks.push(mark1,mark2,mark3,...rest);
    } else {
      this.marks.push(mark1,mark2,mark3,...rest);
    } 
}

Student.prototype.getAverage = function () {
  return this.marks.reduce((a, b) => a + b, 0) / this.marks.length
}

Student.prototype.exclude = function exclude(reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}