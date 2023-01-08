// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input

const AskQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter the title of your project.",
            default: '',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to enter a project name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project: ",
            default: '',
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project.",
            default: '',
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use.",
            default: '',
        },
        {
            type: "input",
            name: "contributing",
            message: "Please list your collaboratos, if any, with links to their GitHub profiles.",
            default: '',
        },
        {
            type: "input",
            name: "tests",
            message: "Link test files.",
            default: '',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub username.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('You need to enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "Does your GitHub apppliationcovered under an license? (Please choose from the list)",
            choices: [ 'no license' , 'afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd3clause', 'bsd3clauseclear', 'cc', 'cc01.0',
            'cc-by-4.0', 'cc-by-sa 4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl',
            'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'mspl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql','ofl-1.1', 'ncsa', 'unlicense',' zlib',]
        },

        {
            type: "input",
            name: "repoName",
            message: "Enter your GitHub repo name.",
            default: '',
            validate: repoInput => {
                if (repoInput) {
                    return true;
                } else {
                    console.log('You need to enter your GitHub repo name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email.",
            default: '',
        },

    ])
       .then(readmeData => {
            const genMd = generateMarkdown(readmeData);
            return genMd
             
        })
     .then(readmeFile => {
         return writeToFile("./dist/README.md", readmeFile);
      })
      .catch(err => {
           console.log(err);
       });

    }
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            //If error, reject//
            if (err) {
                reject(err);
                return;
            }
            //If no error//
            resolve({
                ok: true, 
                message: "File created!",
               
            });
        });
    });
};
   // TODO: Create a function to initialize app 
AskQuestions()
/*
function init() { 
    questions()
    //return inquirer.prompt(questions);
    
}

// Function call to initialize app
init();
*/