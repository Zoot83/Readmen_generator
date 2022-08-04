// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: "title",
        message: "What is the title of your project? "
    },
    {
        type: 'input',
        name: "description",
        message: "Please write a breif description of your project: "
    },
    {
        type: 'input',
        name: "instructions",
        message: "Please descibed the installation process: "
    },
    {
        type: 'input',
        name: "usage",
        message: "What is the project used for?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache 2.0 License",
            "Boost Software License 1.0",
            "BSD 3-Clause License",
            "BSD 2-Clause License",
            "Eclipse Public License 1.0",
            "GNU GPL v3",
            "GNU GPL v2",
            "GNU AGPL v3",
            "GNU LGPL v3",
            "GNU FDL v1.3",
            "The Hippocratic License 2.1",
            "The Hippocratic License 3.0",
            "IBM Public License Version 1.0",
            "ISC License (ISC)",
            "MIT",
            "Mozilla Public License 2.0",
            "Open Database License (ODbL)",
            "Public Domain Dedication and License",
            "Perl",
            "Artistic License 2.0",
            "SIL Open Font ",
            "The Do What the Fuck You Want to Public License",
            "No License"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this projects?"
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included?"
    },
    {
        type: "input",
        name: "questions",
        message: "What do I do if I have an issue? "
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    generateReadMe = generateMarkdown(data);
    fs.writeFile(fileName,generateReadMe, (err) => 
    err ? console.log(err): console.log("Successfully created README.md")
    );
    
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((answers) => {

        writeToFile('README.md',answers);
    
        
      });
}


// Function call to initialize app
init();
