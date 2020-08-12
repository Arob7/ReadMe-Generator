var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
  {
    type: "input",
    name: "What is the title of your project?",
    message: "title",
  },
  {
    type: "input",
    message: "Write a description",
    name: "description",
  },

  {
    type: "input",
    message: "Installation instructions?",
    name: "installation instructions",
  },
  {
    type: "input",
    message: "Usage?",
    name: "usage information",
  },
  {
    type: "input",
    message: "contribution guidelines",
    name: "contribution",
  },
  {
    type: "input",
    message: "test instructions",
    name: "test",
  },
  {
    type: "input",
    message: "Write a table of contents",
    name: "Table of Contents",
  },
  {
    type: "input",
    name: "input badge code",
    message: "badge",
  },
]);
// .then(function (response) {
//   if (response.confirm === response.password) {
//     console.log("Success!");
//   } else {
//     console.log("Not entry!");
//   }
// });
