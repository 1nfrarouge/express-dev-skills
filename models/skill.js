const skills = [
    {id: 1, skill: 'HTML', done: true},
    {id: 2, skill: 'CSS', done: true},
    {id: 3, skill: 'JS', done: true}
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return skills;
  }