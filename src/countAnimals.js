const data = require('../data/zoo_data');

const { species } = data;

const allAnimals = () => {
  const obj = {};
  species.forEach((eachSpecies) => {
    obj[eachSpecies.name] = eachSpecies.residents.length;
  });
  return obj;
};

function countAnimals(animal) {
  if (!animal) {
    return allAnimals();
  }

  const chosenSpecie = species.find((specie) => specie.name === animal.specie);
  const { residents } = chosenSpecie;

  if (animal.sex) {
    const genderSpecies = residents.filter((eachSpecies) =>
      eachSpecies.sex === animal.sex);
    return genderSpecies.length; // return quantity of gender found in array
  }

  return residents.length; // return quantity of species found in object array
}

// console.log(countAnimals());
// console.log(countAnimals({ specie: 'snakes' }));
console.log(countAnimals({ specie: 'snakes', sex: 'male' }));

module.exports = countAnimals;
