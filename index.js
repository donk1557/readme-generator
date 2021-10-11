// TODO: Include packages needed for this application
const inquire = require('inquirer');
const markDown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = inquire.prompt([
{
  type: 'input',
  message: 'What is the title of the project?',
  name: 'title',
},
{
  type: 'editor',
  message: 'Provide description',
  name: 'description',
},
{
  type: 'editor',
  message: 'Provide installation instructions',
  name: 'installation',
},
{
  type: 'editor',
  message: 'Provide usage information',
  name: 'usage',
},
{
  type: 'editor',
  message: 'Provide contributing guidelines',
  name: 'contribute',
},
{
  type: 'editor',
  message: 'Provide test instructions',
  name: 'test',
},
{
  type: 'checkbox',
  message: 'What licenses are associated with this project?',
  name: 'stack',
  choices: ['MIT','GNU GPLv3', 'ISC', 'Apache 2.0'],
},
{
  type: 'input',
  message: 'What GitHub username do you want to associate to this project?',
  name: 'gitHubUser',
},
{
  type: 'input',
  message: 'What email address do you want to associate to this project?',
  name: 'email',
},
]).then((data) =>{

  const content = markDown(data);
  writeToFile("readMe.md",content);
  
} )

// TODO: Create a function to write README file
function writeToFile(fileName, content) {
  fs.writeFile(fileName, content, (err) =>
  err ? console.error(err) : console.log('Success!')
);}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
