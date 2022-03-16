const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const supervised = employees.filter(({ managers }) =>
      managers.includes(managerId));
    // console.log(supervised);
    const nameWorker = supervised.map(({ firstName, lastName }) =>
      `${firstName} ${lastName}`);
    return nameWorker;
  }
  // https:developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

// console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
