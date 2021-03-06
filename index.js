//adding fs and Inquirer

const fs = require('fs');
const inquirer = require('inquirer');


// adding Intern, Engineer, and Manager classes
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

// Array for Employee information
const employeesFinal = [];


//Using inquirer to ask for team Manager information
function managerInfo() {

    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your managers name?',
            name: 'name',

            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter your manager's name.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'What is your managers employee ID?',
            name: 'id',

            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter the employee ID.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'What is your managers office number?',
            name: 'officeNumber',
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter the office number");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'What is your managers email address?',
            name: 'email',
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter the email address.");
                }
                return true;
            }
        }
    ])
        .then(function (data) {

            const name = data.name
            const id = data.id
            const email = data.email
            const officeNumber = data.officeNumber

            const teamMember = new Manager(name, id, email, officeNumber)
            employeesFinal.push(teamMember)
            console.log(employeesFinal)
            newTeamMember()

        });

};

//Using inquirer to ask  if the user wants to add a new team member

function newTeamMember() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "Yes, add an Engineer",
                "Yes, add an Intern",
                "No, my team is complete!",
            ],
            name: "addTeamMember"

        }

    ])
        .then(function (data) {

            switch (data.addTeamMember) {
                case "Yes, add an Engineer":
                    return engineerInfo();


                case "Yes, add an Intern":
                    return internInfo();

                case "No, my team is complete!":
                    return finalizeTeam();

            }
        })

}

//If user chooses to add an intern, this function uses inquirer to ask for info

function internInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Interns name?',
            name: 'name',

            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter the name.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'What is the Interns employee ID?',
            name: 'id',

            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter the employee ID.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'Where does the Intern go to school?',
            name: 'school',
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter the school name.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'What is the Interns email address?',
            name: 'email',
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter the email address.");
                }
                return true;
            }
        }
    ])
        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            employeesFinal.push(teamMember)
            newTeamMember()
        });
};


//If user chooses to add an Engineer, this function uses inquirer to ask for info
function engineerInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Engineers name?',
            name: 'name',

            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter the name.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'What is the Engineers employee ID?',
            name: 'id',

            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter the employee ID.");
                }
                return true;
            }
        },

        {
            type: 'input',
            message: 'What is the Engineers email address?',
            name: 'email',
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter the email address.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'What is the Engineers github username?',
            name: 'github',
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter the github username.");
                }
                return true;
            }
        }
    ])
        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            console.log(teamMember)
            employeesFinal.push(teamMember)
            newTeamMember()
        });
}

//if the user chooses to not enter more member this function runs
function finalizeTeam() {


    //array to store final HTML for new file
    const totalHTML = []

    //beginning of HTML
    const htmlEl = `
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Custom styles for this template -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title> Team Profile </title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="./style.css" rel="stylesheet">
</head>

<header>
      <h1 style="text-align: center;padding: 3%;">My Team</h1>
    </header>

<body>
<div class="container mb-3">
<div class="row">`

    totalHTML.push(htmlEl);

//add cards for each employee
    for (let i = 0; i < employeesFinal.length; i++) {
        let card = `
            <div class="card border-light md-4 employeecard">
    <div class="card-body">
        <h5 class="card-header">${employeesFinal[i].name} <br>
       ${employeesFinal[i].role} </h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${employeesFinal[i].id}</li>
        <li class="list-group-item">Email Address: <a href="mailto:${employeesFinal[i].email}">${employeesFinal[i].email}</a></li>`





// if array has office number, add this info for managers
        if (employeesFinal[i].officeNumber) {

            card += `
            <li class="list-group-item">Office Number: ${employeesFinal[i].officeNumber}</li>
           
    `
        }

  // if array has github, add this info for enginners   
        if (employeesFinal[i].github) {
            card += `
            <li class="list-group-item">GitHub Profile: <a href="https://github.com/${employeesFinal[i].github}" target="_blank">${employeesFinal[i].github}</a></li>
    `
        }

        // if array has school, add this info for interns
        if (employeesFinal[i].school) {
            card += `
            <li class="list-group-item">School: ${employeesFinal[i].school}</li>
    `
        }

        totalHTML.push(card);

        const endingHtml = `   
            </ul>               
</div>
</div>
`

        totalHTML.push(endingHtml);

    }
    const finalHTML = `

</div>
</div>
</body>
</html>`
    totalHTML.push(finalHTML);

//create new file for employee profiles
    fs.writeFile(`./dist/teamprofile.html`, totalHTML.join(""), function (err) {

    })


}

//start app
managerInfo()