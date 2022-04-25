// TODO: Include packages needed for this application
const { error } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'userEmail',
        message: 'Please enter your email address'
      },
      {
        type: 'input',
        name: 'username',
        message: "What is your Github Username?"
      },
      {
          type: 'input',
          name: 'title',
          message: 'What is Your projects name? ',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please Provide a description of your project. What was your motivation? '
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What dependencies are needed to run this program? Is there anything else user should know?: '
      },
      {
       type: 'input',
       name: 'usageInfo',
       message: 'Please provide instructions on how to use your program'
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What license does the program use?:',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'OTHER']
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Please provide indepth guidelines on how/if you want someone to contribute to your project. please be clear and concise.'
      }
    ]).then(res => {
      const userinput = res;
      return writeToFile(userinput)
    })
}

// TODO: Create a function to write README file
function writeToFile(userinput) {
   return new Promise((resolve, reject) => {
     fs.writeFile('README.md',markDown( userinput), err => {
       if (err) throw err;
       
     })
   })



}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
questions()
