
var readlineSync = require("readline-sync");
var score = 0;
var que = [
  {
    question : "I am from which city?",
    answer : "Nagpur"
  },
  {
    question : "Which is my favorite sport?",
    answer : "Football"
  },
  {
    question : "Which football club do I support?",
    answer : "FCB"
  },
  {
    question : "Am I a early bird or a night owl?",
    answer : "early bird"
  },
  {
    question : "What is my favorite street food?",
    answer : "Pani puri"
  }
];

welcome();
quiz();
finalScore();

function quiz(){
  for(var i=0 ;i<que.length; i++){
    var currentQue = que[i].question;

    var ans = readlineSync.question(currentQue);
    if(ans.toUpperCase() === que[i].answer.toUpperCase()){
      console.log("Correct Answer!!");
      score = score+1;
    }else{
      console.log("Wrong Answer!!");
    }
    console.log("---------");
    console.log("current score :"+score);

  }
}

function welcome(){
  var username = readlineSync.question("What is your name?");
  console.log("Welcome "+username + "!");
  var ans = readlineSync.question(" Do you know Tushar?");
  console.log("Let's see");
  console.log("----------------------");
}
function finalScore(){
  console.log("----------------------");
  console.log("Final score : "+score);
}