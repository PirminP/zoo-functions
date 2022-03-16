const data = require('../data/zoo_data');

// console.log(data);
const { species } = data;

function getSpeciesByIds(...ids) {
  const wantedSpecies = [];
  ids.forEach((id) => {
    wantedSpecies.push(species.find((animal) => animal.id === id));
  });
  return wantedSpecies;
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
