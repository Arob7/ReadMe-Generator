const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

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
    name: "install",
    message: "Installation instructions",
  },
  {
    type: "input",
    name: "usageInformation",
    message: "Usage",
  },
  {
    type: "input",
    name: "contribution",
    message: "Contribution Guidelines",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license.",
    choices: ["MIT", "Apache", "GPL"],
  },
  {
    type: "input",
    name: "test",
    message: "Test Instructions",
  },
  {
    type: "input",
    name: "inputBadgeCode",
    message: "Badge Code",
  },
];

// function to write README file
function writeToFile(README, data) {}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((userAnswers) => {
      const readme = generateMarkdown(userAnswers);
      fs.writeFile("ReadME.md", readme, function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
      });
      // writeToFile(userAnswers);
      console.log(userAnswers);
    })
    .catch((err) => console.log(err));
}

// function call to initialize program
init();
