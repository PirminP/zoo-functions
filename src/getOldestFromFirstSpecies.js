const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const getEmployee = employees.find((employee) => employee.id === id);
  const idFirstSpecie = getEmployee.responsibleFor[0];
  const firstSpecie = species.find((specie) => specie.id === idFirstSpecie);
  const specieResidents = firstSpecie.residents;
  const oldestSpecie = specieResidents.reduce((acc, specie) =>
    (acc.age > specie.age ? acc : specie));
  return Object.values(oldestSpecie);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
