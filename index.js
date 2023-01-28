var readline= require("readline-sync");

const chalk = require('chalk');
const log = console.log;
var score =0;

log(chalk.green.bold.underline("Welcome to the Frontend Quiz !"));

var username = readline.question(chalk.blue.italic.bgCyanBright.underline("What's your name ? \n"))

var welcomeUser = "Welcome ! " + username + " let's check your frontend knowledge ? "

log(chalk.cyan(welcomeUser))

log(chalk.red("1. Rules and Instructions as follows"));
log(chalk.red("2. " + chalk.blue.bold( username )+ " There are 10 Question Frontend Development "))
log(chalk.red("3. you will get 2 point on each right answer"))
log(chalk.red("4. 1 point will deducted if answer is wrong"));
log(chalk.red("5. In MCQ based questions you have to type serial / index number"));


var HighScore = [
  {
    name:"Vishu",
    score:20
  },
  {
    name:"Peter",
    score:19
  }
]

var questions = [
   {
    question:"How many ways to link Css",
    answer:"3"
  },
  {
    question:"What is the latest version of HTML ",
    answer:"HTML5"
  },
  {
    question:"Html is invented by ",
    answer:"Tim"
  },
 
  {
    question:"What is the value 1 rem in pixel ",
    answer:"16"
  },
  {
    question:"How many variables in javascript",
    answer:"2"
  }
];



function play(question,answer){
  var userAnswer = readline.question(chalk.bgCyan.blue.underline(question));

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    log(chalk.green("You are right!"));
    score = score+2;
  }
  else{
    log(chalk.red("You are wrong"))
    score = score-1;
  }

  if(score<0){
    score =0;
  }
  log(chalk.yellow.bold("your score is ",score))
}


for(let i=0; i<questions.length; i++){
  play(questions[i].question + "\n",questions[i].answer)
}


log(chalk.yellow.bold("Your final score ",score))


var mcqList = [
  {  
    array:["Object-Oriented","Object-Based","Procedural","none"],
    question:"Javascript is an _______ language? ",
    answer:"Object-Oriented"
  },
{
  array:["var","let","Both","none"],
    question:"Which of the following keyword is used to define a variable in javascript",
  answer:"Both"
},
  {
    array:['getElementbyId()',"getElementByClassName()","Both","none"],
    question:"which of the following methods is used to access HTML elements using Javascript ",
    answer:"both"
  },
  {
    array:["Document.write()","console.log()","window.alert()","All"],
    question:"which of the following methods can be used to display data in some form using Javascript?",
    answer:"All"
  },
  {
    array:["const","var","let","constant"],
    question:"How can a datatype be declared to be constant type?",
    answer:"const"
  }
]


function playMCQ(arrayOfAnswer,question,answer){
    var userAnswer = readline.keyInSelect(arrayOfAnswer,chalk.cyanBright.bgBlueBright(question));


  if(arrayOfAnswer[userAnswer].toLowerCase()===answer.toLowerCase()){
    log(chalk.green("you are right"))
    score = score+2;
  }
  else{
    log(chalk.red("you are wrong"))
    score =score-1;
  }
  log(chalk.yellow.bold("your score is ",score))
}


for(let i=0; i<mcqList.length; i++){
  playMCQ(mcqList[i].array,mcqList[i].question,mcqList[i].answer);
}




for(let i=0; i<HighScore.length; i++){
  var HighScoreName = HighScore[i].name;
  var Score = HighScore[i].score;
  
  console.log(chalk.red(HighScoreName,Score))
}


function checkScore(){
  console.log(HighScoreName,Score,username,score);

  if(Score<score){
    console.log(chalk.underline.bgCyanBright.bold(username  + " is higher score than " + HighScoreName))  
    console.log(chalk.black.bgWhite("congratulate  you brake the record"))
  }
  else{
    console.log(chalk.blue("Opp! you  have low score than " + HighScoreName))
  }
}


checkScore();