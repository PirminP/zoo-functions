const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

const { prices } = data;

function countEntrants(entrants) {
  const entranceCounter = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((visiter) => {
    if (visiter.age < 18) {
      entranceCounter.child += 1;
    } else if (visiter.age < 50) {
      entranceCounter.adult += 1;
    } else {
      entranceCounter.senior += 1;
    }
  });
  return entranceCounter;
}
// console.log(countEntrants(entrants));

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const entry = countEntrants(entrants);
  const entryFee = [prices];
  entryFee.push(entry);
  // console.log(entryFee);
  const totalCost = entryFee.reduce(((acc, curr) =>
    acc.child * curr.child + acc.adult * curr.adult + acc.senior * curr.senior));
  return totalCost;
}
// console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
