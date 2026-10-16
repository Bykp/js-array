
function findByName(people, name) {
  return people.find(function(person) {
    return person.name === name;
  });
}

module.exports = findByName;
