var readlineSync = require('readline-sync');

var questionList = [
   question1 = {
     question: 'Where do i live?',
  answer: 'mumbai',
  option: ['mumbai', 'goa','delhi', 'kolkata']
  },
  question2 = {
     question: 'What is my favourite colour?',
  answer: 'blue',
  option: ['yellow', 'purple','blue', 'green']
  },
  question3 = {
     question: 'What is my favourite animal?',
  answer: 'dog',
  option: ['cat', 'dog','rabbit', 'turtle']
  },
  question4 = {
     question: 'What is my favourite flower?',
  answer: 'lily',
  option: ['lily', 'rose','jasmine', 'sunflower']
  },
   question5 = {
     question: 'What is my favourite fruit?',
  answer: 'mango',
  option: ['banana', 'apple','orange', 'mango']
  }, 
]


var userName = readlineSync.question("Enter your name: ");
console.log("Welcome "+userName);
console.log("Let's begin with the quiz");

var score = 0;
for(var i=0;i<questionList.length;i++){
  var userAnswer = readlineSync.keyInSelect(questionList[i].option, questionList[i].question);
  if(questionList[i].option[userAnswer] == questionList[i].answer){
    score++;
    console.log("Right answer");
    }
  else{
    console.log("Wrong answer");
  }
}

console.log("Your final score = "+score);


