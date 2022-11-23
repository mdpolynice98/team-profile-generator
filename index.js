const inquirer = require('inquirer');
const fs = require('fs');

//require the worker info
const info = require('./lib/workerinfo')
const team = [];
const Intern = require('./lib/ntern');
const Engineer = require('./lib/Engineer.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');

//calls the two functions
function init(){
    generateHTML();
    member();
}

//questions promt for team leader
//refer to the readme generator incase I get lost 

function member() {

    inquirer.prompt([

    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the new team member?'

    },

    {
        type: 'list',
        name: 'role',
        message: 'Please select role',
        choices: [
            'Engineer',
            'Employee',
            'Intern',
            'Manager',
        ]
    },

    {
        type: 'input',
        name: 'id',
        message: 'Please provide id#'
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please provide email address'
    }])
    
    .then(function({name, role, id, email}) {

        let employeeInfo = "";

        if (role === 'Engineer') {
            employeeInfo = 'GitHub username';
        } else if (role === 'Intern') {
            employeeInfo = 'Github username'
        } else {
            employeeInfo = 'Github username'
        }

        inquirer.prompt([{
            type: 'input',
            name: 'employeeInfo',
            message: `Please enter the ${employeeInfo} of the member you just added.`
        },
    
        {
            type: 'list',
            name: 'addMoreMembers',
            message: 'Would you like to add another team member?',
            choices: [
                'yes',
                'no'
            ]
        }])

        .then(function({addMoreMembers, employeeInfo}) {

            let newMember;

            if (role === 'Engineer') {

                newMember = new Engineer(name, id, email, employeeInfo);

            } else if (role === 'Intern') {

                newMember = new Intern(name, id, email, employeeInfo);

            } else if (role === 'Manager') {

                newMember = new Manager(name, id, email, employeeInfo);
            }

            team.push(newMember);
            
            addHTML(newMember).then(function() {

                if (addMoreMembers === "yes") {

                    member();
                } else {
                    endHTML();
                }

            });

        });

    })

};


init();
