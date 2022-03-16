const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const getEmployee = employees.find((human) =>
    human.firstName === employeeName || human.lastName === employeeName);
  return getEmployee;
}

console.log(getEmployeeByName('Strauss'));

module.exports = getEmployeeByName;
