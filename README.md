# SVG Logo Maker

## Description
- This program uses prompts to gather information from the user, then creates shape objects based on the responses to the prompts.
- I wrote this program to get a better understanding of how objects work.

## Installation
Before running the program, the user must install Inquirer 8.2.4 and FS. Both dependencies are included in the package.json file, so the user can install them by typing ```npm i``` in the terminal.

## Usage
After installing Inquirer 8.2.4 and FS, the program can be executed by typing ```node index``` in the terminal. The program will provide a series of prompts that the user must answer, including the text for the logo, the type of shape, and the colors for both the text and shape. Once all of the prompts are created, the resulting .svg file will be located in ./examples/logo.svg. To view the logo, the logo.svg file must be opened in the browser.

![Screenshot of Program](<./images/program.png>)
![Screenshot of Generated Logo](<./images/logo.png>)

## Credits
How to export multiple objects at once: https://stackoverflow.com/questions/16631064/declare-multiple-module-exports-in-node-js

## License
Please refer to the LICENSE in the repo.

## Source Code Locations
index.js: ./index.js   
package.json: ./package.json   
Shapes.js: ./lib/shapes.js   
Shapes.test.js: ./lib/Shapes.test.js

## Walkthrough Video
https://drive.google.com/file/d/1Wc2_M7kN4ImhlmFD0CphGPQPCq-GUc9z/view?usp=sharing