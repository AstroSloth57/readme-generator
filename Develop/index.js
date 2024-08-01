// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require('fs').promises;
// TODO: Create an array of questions for user input
// const questions = [];
const promptUser = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your project installed?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your project used?'
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'What license does your project use?',
        choices: [
            { name: 'none', value: 'no license' },
            { name: 'Apache License 2.0', value: 'the Apache License 2.0' },
            { name: 'GNU General Public License v3.0', value: 'the GNU General Public License v3.0' },
            { name: 'MIT License', value: 'the MIT License' },
            { name: 'BSD 2-Clause "Simplified" License', value: 'the BSD 2-Clause "Simplified" License' },
            { name: 'BSD 3-Clause "New" or "Revised" License', value: 'the BSD 3-Clause "New" or "Revised" License' },
            { name: 'Boost Software License 1.0', value: 'the Boost SOftware License 1.0' },
            { name: 'Creative Commons Zero v1.0 Universal', value: 'the Creative Commons Zero v1.0 Universal' },
            { name: 'Eclipse Public License 2.0', value: 'the Eclipse Public License 2.0' },
            { name: 'GNU Affero General Public License v2.0', value: 'the GNU Affero General Public License' },
            { name: 'GNU General Public License v2.0', value: 'the GNU General Public License v2.0' },
            { name: 'GNU Lesser General Public License v2.1', value: 'the GNU Lesser General Public License v2.1' },
            { name: 'Mozilla Public License 2.0', value: 'the Mozilla Public License 2.0' },
            { name: 'The Unilicense', value: 'The Unilicense' },
        ]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can people contribute to your project?'
    },
    {
        type: 'input',
        name: 'testFiles',
        message: 'What are the names of your test files?'
    },
    {
        type: 'input',
        name: 'testUsage',
        message: 'How can these tests be used?'
    }])
    .then((response) => {
        const data = 
`# ${response.title}!

## Table of Contents
1- Description
2- Installation
3- Usage
4- License
5- Contribution
6- Tests

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## License
This project uses ${response.license}.

## How to Contribute
${response.contribution}

## Tests
The test file(s) for this project can be found under the name(s):
${response.testFiles}.
Instructions for test usage:
${response.testUsage}
`
writeToFile('README', data);
    });
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) => {
        err ? console.log(err) : console.log('README successfully generated!')
    })
}

// TODO: Create a function to initialize app
function init() {
    fs.writeFile('README.md', '', (err) => {
        err ? console.log(err) : console.log('README.md initialized')
    })
    promptUser();
}

// Function call to initialize app
init();
