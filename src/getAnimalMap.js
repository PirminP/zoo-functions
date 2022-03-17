const data = require('../data/zoo_data');

const { species } = data;

function getResidents(i, sex, sorted) {
  let animalName = species[i].residents.map((specie) => specie.name);
  if (sex === 'male' || sex === 'female') {
    animalName = species[i].residents
      .filter((specie) => specie.sex === sex)
      .map((specie) => specie.name);
  }
  if (sorted === true) {
    animalName.sort();
  }
  return animalName;
}

function getAnimalMap(options = {}) {
  const { includeNames, sex, sorted } = options;
  const animalMap = { NE: [], NW: [], SE: [], SW: [] };
  if (includeNames === undefined) {
    species.forEach((specie) => {
      animalMap[specie.location].push(specie.name);
    });
    return animalMap;
  }
  species.forEach((specie, i) => {
    animalMap[specie.location].push({ [specie.name]: getResidents(i, sex, sorted) });
  });
  return animalMap;
}

module.exports = getAnimalMap;
