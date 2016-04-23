var Student = function(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase){
  this.name = name;
  this.gender = gender;
  this.grade = grade;
  this.gpa = gpa;
  this.detentions = detentions;
  this.sleepingInClass = sleepingInClass;
  this.catchPhrase = catchPhrase;
  this.canStudentHaveFun = function(){
    if((detentions < 10) && (gpa > 2)) {
      console.log("Student can have fun! :)");
    } else {
      console.log("Student can't have fun! :(");
    }
  }
}

module.exports = Student;