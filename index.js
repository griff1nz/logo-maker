const inquirer = require('inquirer');
const fs = require('fs');
inquirer
    .prompt([
        {
            type: 'list',
            message: 'Select the shape type: ',
            name: "shapes",
            choices: ["Square", "Circle", "Triangle"]
        }
    ])
    .then ((answers) => {
        console.log(answers.shapes);
    })