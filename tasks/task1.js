
function filterAdults(people) {
  return people.filter(function(person) {
    return person.age >= 18;
  });
}

module.exports = filterAdults;
