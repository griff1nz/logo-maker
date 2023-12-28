const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./classes/Shapes.js');
const Square = require('./classes/Shapes.js');
const Circle = require('./classes/Shapes.js');
const questions = [{
    type: 'input',
    message: 'Enter text for the logo (up to three characters): ',
    name: 'logo', 
},
{
    type: 'input',
    message: 'Enter text color (keyword or hexadecimal): ',
    name: 'textColor',
},
{
    type: 'list',
    message: 'Select the shape type: ',
    name: "shapes",
    choices: ["Square", "Circle", "Triangle"]
},
{
    type: 'confirm',
    message: 'Upside down?',
    name: 'upsideDown',
    when: (answers) => answers.shapes === 'Triangle',
},
{
    type: 'input', 
    message: 'Enter shape color (keyword or hexadecimal): ',
    name: 'shapeColor',
}]
const runPrompts = () => {
inquirer
    .prompt(questions
        )
    .then ((answers) => {
        if (answers.logo.length > 3) {
            console.log("Logo text is too long, try again")
            runPrompts();
        }
        else {
            console.log("nice");
            generateShape(answers);
        }
    })
}
const generateShape = (data) => {
    const shape = new Triangle;
    console.log(shape);
}
runPrompts();