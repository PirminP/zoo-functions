const data = require('../data/zoo_data');

const { species, employees } = data;

function getAllEmployee() {
  const entireEmployees = employees.map((employee) => {
    const newObj = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employee.responsibleFor.map((id) => species
        .find((animal) => animal.id === id).name),
      locations: employee.responsibleFor.map((id) => species
        .find((animal) => animal.id === id).location),
    };
    return newObj;
  });
  return entireEmployees;
}

function getOneEmployee(nameOrId) {
  const currentEmployee = employees
    .find((employee) => employee.firstName === nameOrId
    || employee.lastName === nameOrId || employee.id === nameOrId);
  if (!currentEmployee) {
    throw new Error('Informações inválidas');
  }
  const newObj = {
    id: currentEmployee.id,
    fullName: `${currentEmployee.firstName} ${currentEmployee.lastName}`,
    species: currentEmployee.responsibleFor.map((id) => species
      .find((animal) => animal.id === id).name),
    locations: currentEmployee.responsibleFor.map((id) => species
      .find((animal) => animal.id === id).location),
  };
  return newObj;
}

function getEmployeesCoverage(chosenEmployee) {
  if (!chosenEmployee) {
    return getAllEmployee();
  }
  if (chosenEmployee.id) {
    return getOneEmployee(chosenEmployee.id);
  }
  if (chosenEmployee.name) {
    return getOneEmployee(chosenEmployee.name);
  }
}

module.exports = getEmployeesCoverage;
