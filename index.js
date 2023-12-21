const inquirer = require('inquirer');
const fs = require('fs');
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Is this working?',
            name: "isThisWorking"
        }
    ])
    .then ((answers) => {
        console.log(answers.isThisWorking);
    })