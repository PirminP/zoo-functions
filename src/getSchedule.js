const data = require('../data/zoo_data');

const { species, hours } = data;
const daysOfWeek = Object.keys(hours);
const namesOfAnimal = species.map((animal) => animal.name);
// console.log(daysOfWeek);
// console.log(namesOfAnimal);

function animalsSchedule(animalName) {
  const chosen = species.find((animal) => animal.name === animalName);
  return chosen.availability;
}
// console.log(animalsSchedule('giraffes'));

function monday() {
  const scheduleOfZoo = {
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
  return scheduleOfZoo;
}
// console.log(monday());

function daysSchedule(dayName) {
  if (dayName === 'Monday') {
    return monday();
  }
  const chosenDay = hours[dayName];
  const scheduleOfToday = `Open from ${chosenDay.open}am until ${chosenDay.close}pm`;
  const availableAnimals = species.filter((animal) =>
    animal.availability.includes(dayName)).map((filterAnimals) => filterAnimals.name);
  const scheduleOfZoo = {
    [dayName]: {
      officeHour: scheduleOfToday,
      exhibition: availableAnimals,
    },
  };
  return scheduleOfZoo;
}
// console.log(daysSchedule('Friday'));

function getSchedule(scheduleTarget) {
  if (daysOfWeek.includes(scheduleTarget)) {
    return daysSchedule(scheduleTarget);
  }
  if (namesOfAnimal.includes(scheduleTarget)) {
    return animalsSchedule(scheduleTarget);
  }
  const scheduleofWeek = daysOfWeek.reduce(((acc, curr) => {
    const schedule = getSchedule(curr);
    const valueOfSchedule = schedule[curr];
    acc[curr] = valueOfSchedule;
    return acc;
  }), {});
  return scheduleofWeek;
}
console.log(getSchedule('dsfsdf'));

module.exports = getSchedule;
