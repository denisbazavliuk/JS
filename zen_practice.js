function Human(age, name) {
  this.age  = age;
  this.name = name;
}

Human.prototype.introduce = function () {
  var age  = this.age;
  var name = this.name;
  var message;

  //here your code
  //human should say his name, how old is he/she
  //eg: My name is John and i am 18 years old
  
 if (name && age) {
     message = `My name is ${name} i am ${age} years old`;
 } else if (name) {
      message = `My name is ${name}`;
 } else if (age) {
     message = `i am ${age} years old`;
 } else {
     message = 'Who am i ???'
 }
 
  console.log(message);
};

function Citizen(age, name, citizenship) {
  Human.apply(this, arguments);
  this.citizenship = citizenship;
}

Citizen.prototype = new Human();

Citizen.prototype.introduce = function () {
  Human.prototype.introduce.apply(this, arguments);
  var citizenship = this.citizenship;
  var age = this.age;
  var message;


  //here your code
  //citizen should say his citizenship and does he has an ID
  //eg: I am citizen of a Kyrgyzstan

citizenship = citizenship.toLowerCase(); // converting string to lowercase chars, to use if statement

if (citizenship === 'kg' && age >= 18) { 
    message = `I am citizen of ${citizenship} and i have an ID`;
} else if (citizenship !== 'kg') {
    message = `I'm not a citizen Kyrgyzstan, i'm from ${citizenship}`;
} else if (citizenship === 'kg' && age < 18) {
  message = `I'm a citizen of ${citizenship} ,but don't have an ID`;
} else {
  message = 'I\'m from another Galaxy';
}


  console.log(message);
};

Citizen.prototype.monthCosts = function () { // declared new variables dinner and breakfast
  var dinner = 30;
  var breakfast = 20;
  var monthlyFood = (dinner + breakfast) * 31;
  var costs;
  

  //here your code
  //citizen should say how much does he spent every month
  //eg: (dinner + breakfast) * 31
  
  if (dinner && breakfast) {
     costs = `I spent ${monthlyFood} $ for food every month`;
 } else if (dinner) {
      monthlyFood = dinner * 31;
      costs = `I only eat dinner and spent ${monthlyFood}$`;
 } else if (breakfast) {
      monthlyFood = breakfast * 31;
      costs = `I only eat breakfast and spent ${monthlyFood}$`;
 } else {
     costs = 'I dont eat at all';
 }

  console.log(costs);
};

function Student(age, name, citizenship, monthlyPay) {
  Citizen.apply(this, arguments);
  this.monthlyPay = monthlyPay;
}

Student.prototype = new Citizen();

Student.prototype.introduce = function () {
  Citizen.prototype.introduce.apply(this, arguments);
  var age = this.age;
  var message = 'student';

  //here your code
  //student should say on which level he/she is
  //I am a student of a high school
  
if (age >= 18 && age <= 21) {
    message = 'I am a student of a high school';
} else if (age < 18 && age >= 16) {
  message = 'I am a student of a middle school';  
} else if (age < 16 && age >= 14) {
  message = 'I am a student of a junior school';
} else {
  message = 'I\'m not a student';
}

  
  console.log(message);
};

Student.prototype.shouldPayPerMonth = function () {
  var monthlyPay = this.monthlyPay;
  var message;
  var yearPay = monthlyPay * 12;

  //here your code
  //and how much he need to pay for whole course
  
 message = `I shuld spend ${yearPay} on education in a year`; 

  console.log(message);

};

Student.prototype.shouldBePayedBack = function () {
  var monthlyPay = this.monthlyPay;
  var message;
  var yearReturns = (monthlyPay * 12) / 2;


  //here your code
  //and how much he will received by end of a course
  
message = `I'll recieve back ${yearReturns} by the end of the year`;

  console.log(message);
};

var student = new Student('18', 'John', 'kg', '100');

student.introduce();
student.monthCosts();
student.shouldPayPerMonth();
student.shouldBePayedBack();


