const skills = [
  {id: 1, skill: 'HTML', done: true},
  {id: 2, skill: 'CSS', done: true},
  {id: 3, skill: 'JS', done: true}
];
module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};
	
function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1)
}

function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  // New skills wouldn't be done :)
  skill.done = false;
  skills.push(skill);
}
function getAll() {
  return skills;
}
function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}