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
    type: "checkbox",
    name: "license",
    message: "Choose a license.",
    choices: ["MIT", "Apache", "Perl"],
  },
  {
    type: "list",
    name: "inputBadgeCode",
    message: "Choose badge for License",
    choices: [
      `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
      `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
      `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`,
    ],
  },
  {
    type: "input",
    name: "test",
    message: "Test Instructions",
  },
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
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
