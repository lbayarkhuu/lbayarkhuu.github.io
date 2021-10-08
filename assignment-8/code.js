// Exercise 1:
String.prototype.filter = function (word) {
  return this.replace(word + " ", "");
};

// Exercise 2:
Array.prototype.bubbleSort = function () {
  for (let i = this.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (this[j] > this[j + 1]) {
        tmp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = tmp;
      }
    }
  }

  return this;
};

// Exercise 3:
var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

var Teacher = function () {};
Teacher.prototype = new Person();

Teacher.prototype.learn = function (subject) {
  return this.name + " is now teaching " + subject;
};

var me = new Teacher();
me.initialize("John", 25);