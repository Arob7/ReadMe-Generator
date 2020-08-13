const inquirer = require("inquirer");
const fs = require("fs");

const readMe = fs.readFileSync("readMe.txt", "utf8");
console.log(readMe);

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "Write a description",
  },
  {
    type: "input",
    name: "install ",
    message: "Installation instructions?",
  },
  {
    type: "input",
    name: "usage information",
    message: "Usage?",
  },
  {
    type: "input",
    name: "contribution",
    message: "contribution guidelines",
  },
  {
    type: "input",
    name: "test",
    message: "test instructions",
  },
  {
    type: "input",
    name: "Table of Contents",
    message: "Write a table of contents",
  },
  {
    type: "input",
    name: "inputBadgeCode",
    message: "badge",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((userAnswers) => {
    console.log(
      "init, after prompt answers, Next call write to file with the users answers!"
    );
    console.log(userAnswers);
  });
}

// function call to initialize program
init();
