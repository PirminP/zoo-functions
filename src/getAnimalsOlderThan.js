const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(NameAnimal, age) {
  const wantedAnimal = species.find((animal) => animal.name === NameAnimal);
  const { residents } = wantedAnimal;
  return residents.every((inhabitant) => inhabitant.age > age);
}

// console.log(getAnimalsOlderThan('frogs', 1));

module.exports = getAnimalsOlderThan;
