const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config();


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'staff_db'
  },
  console.log(`YOU ARE NOW CONNECTED TO THE STAFF DB`)
);

const initPrompt = () => {
inquirer.prompt([
  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'initPrompt',
    choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a department', 'Add a Role', 'Add an Employee', 'Update Emplyee Role', 'Leave Application']
  }
])
.then((answer) => {
  console.log(answer);
})
.catch((error) => {
  console.error(error)
})
};

const addDept = () => {
  inquirer.prompt([
    {
      type: 'input'
    }
  ]);
};

initPrompt();