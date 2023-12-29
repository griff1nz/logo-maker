const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./classes/Shapes.js');
const fileName = 'examples/logo.svg';
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
            generateShape(answers);
        }
    })
}
const generateShape = (data) => {
    if (data.shapes === 'Triangle') {
        var shape = new Triangle(data.shapeColor, data.logo, data.textColor, data.upsideDown);
    }
    else if (data.shapes === "Square") {
        var shape = new Square(data.shapeColor, data.logo, data.textColor);
    }
    else {
        var shape = new Circle(data.shapeColor, data.logo, data.textColor);
    }
    console.log(shape);
    fs.writeFile(fileName, shape.render(),  {'flag':'a'},  function(err) {
        if (err) {
            return console.error(err);
        }
    });
    console.log('Generated logo.svg')
}
const init = (file) => {
    fs.writeFile(file, '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">\n   ', (err) => {
    if (err) {
        return console.error(err);
    }});
}
init('examples/logo.svg');
runPrompts();