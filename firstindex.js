const inquirer = require('inquirer');
const fs = require('fs');

function addLicense() {
    inquirer
        .prompt([{
            type: 'input',
            name: 'license',
            message: 'What license agreement is used with your project?'
        }])
        .then((response) => fs.appendFile('README.md', 
            `
            
        ## License
        This project uses the ${response.license} license.`
        ))
}

inquirer
    .prompt([{
        type: 'input',
        name: 'title',
        message: 'What is your projects title?'
    },
{
    type: 'input',
    name: 'description',
    message: 'What is a description of your project?'
},
{
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?'
},
{
    type: 'input',
    name: 'usage',
    message: 'How can your project be used?'
}])
.then((response) => fs.writeFile('README.md', 
`# ${response.title}
    
## Description
${response.description}
    
## Installation
${response.installation}
    
## Usage
${response.usage}`,
(err) => err ? console.log(err) : console.log('Success!')
))
.then(
inquirer
    .prompt([{
        type: 'confirm',
        name: 'licenseCheck',
        message: 'Is there a license agreement for your project?'
    }])
    .then((response) => (response.licenseCheck = true) ? addLicense() : console.log('No license added'))
)
// {
//     type: 'input',
//     name: 'license',
//     message: 'What licensing agreement is used? (if none, type n/a)'
// },
// {
//     type: 'input',
//     name: 'contribution',
//     message: 'How can someone contribute to this project?'
// },
// {
//     type: 'input',
//     name: 'testNames',
//     message: 'What are the names of your test files?'
// },
// {
//     type: 'input',
//     name: 'testUsage',
//     message: 'How can these files be used?'
// }])
