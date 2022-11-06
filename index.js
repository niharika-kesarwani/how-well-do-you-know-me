var readlineSync = require("readline-sync");
const chalk = require('chalk');
var score = 0;

var userName = readlineSync.question("What is your name? ");
console.log(chalk.yellow("\nWelcome " + userName.toUpperCase() + " to DO YOU KNOW ME?\n"));
console.log(chalk.white("Answer 5 questions and let's see if you know me well or not!!!\nYou get +1 for correct and 0 for incorrect answer.\nLets begin!!!!\n"));

var highScore = [
  {
    name: 'Niharika',
    score: 3
  },
  {
    name: 'Hrishita',
    score: 4
  }
]

function play(question, options, answer) {
  console.log(chalk.red(question));
  console.log(chalk.white("\nThe options are:"));
  for (var i = 0; i < options.length; i++) {
    console.log(chalk.blue(options[i]));
  }
  var userAnswer = readlineSync.question("\nType your answer: ");

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green("\nYayyy!!! You are Right!"));
    score++;
  } else {
    console.log(chalk.red("\nOops! The correct answer was", answer + "!!"));
  }
  console.log(chalk.yellow("Current score: " + score + "\n"));
}

var questions = [
  {
    question: "Where was I born? ",
    options: ["Nasik", "Allahabad", "Delhi", "Mumbai"],
    answer: "Nasik"
  },
  {
    question: "Which is my favorite color? ",
    options: ["Red", "Blue", "Pink", "Black"],
    answer: "Blue"
  },
  {
    question: "What is my favourite food out of these? ",
    options: ["Paneer", "Meat", "Karela", "Sweetcorn"],
    answer: "Paneer"
  },
  {
    question: "Which is my favorite hobby? ",
    options: ["Boxing", "Cycling", "Running", "Walking"],
    answer: "Cycling"
  },
  {
    question: "Which is my favorite subject? ",
    options: ["Medicine", "Psychology", "Science", "Maths"],
    answer: "Maths"
  }
];

for (var i = 0; i < questions.length; i++) {
  console.log("-----------------------------------\n\nQ" + (i + 1));
  play(questions[i].question, questions[i].options, questions[i].answer)
}

console.log("-----------------------------------")
console.log(chalk.red("\nYour Final Score is:", score + "/5"));
console.log("\n-----------------------------------\n")

var currentHighScore = highScore[0].score;
var currentHighScoreUser = highScore[0].name;
for (var i = 0; i < highScore.length; i++) {
  if (currentHighScore < highScore[i].score) {
    currentHighScore = highScore[i].score
    currentHighScoreUser = highScore[i].name
  }
}

if (currentHighScore < score) {
  console.log(chalk.green("You beat the high score of " + currentHighScoreUser + " with " + currentHighScore + " points!!!!\n"));
  console.log(chalk.yellow("Send the screenshot of this page to me so that I update the high scorer!!!"))
} else {
  console.log(chalk.yellow("The current high scorer is " + currentHighScoreUser + " with " + currentHighScore + " points!"));
}
console.log("\n-----------------------------------\n")

if (score >= 3) {
  console.log(chalk.green("You know me quite well!!!\nThank you for playing\n\nBYE!!!!"));
} else {
  console.log(chalk.red("Better luck next time!!!\nThank you for playing\n\nBYE!!!!"));
}
console.log("\n-----------------------------------\n")