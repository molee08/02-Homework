
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ("fs");
const generateHTML = ({
title,
description,
installation,
usage,
  }) => '## Description
  🔍 ${answers.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  💾 ${answers.installation}
  ## Usage
  💻 ${answers.usage}
  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br />
  This application is covered by the ${answers.license} license. 
  ## Contributing
  👪 ${answers.contributing}
  ## Tests
  ✏️ ${answers.tests}
  ## Questions
  ✋ ${answers.questions}<br />
  <br />
  :octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
  <br />
  ✉️ Email me with any questions: ${answers.email}<br /><br />
  _This README was generated with ❤️ by [README-generator](https://github.com/jpd61/README-generator) 🔥🔥🔥_';

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
        message: "Describe the installation process if any: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project usage for?"
    },

  ])

  .then((response) => {
    console.log(response);
    let html = generateHTML(response);
    // fs.writeFile('index2.html', JSON.stringify(response),(err) =>
    fs.writeFile("README2.md", readme, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

    // template

 

