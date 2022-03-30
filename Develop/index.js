
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ("fs");
const generateReadme = require('./utils/generateMarkdown');

// inquierer to generate questions 
inquirer
  .prompt([
    {
        type: "input",
        name: "title",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project used for?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose the liscense used for this project:",
        choices: [
            "Apache",
            "Academic",
            "ISC",
            "MIT",
            "Mozilla",
            "Open",
        ]
    },
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email:"
    },
    {
        type: "input",
        name: "questions",
        message: "Any questions?"
    },

  ])

  .then((response) => {
    console.log(response);
    let readme = generateReadme(response);
    fs.writeFile("readme3.md", readme, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });



 

