// controllers/skills.js

// Convention is to name the model in uppercase and singular
const Skill = require('../models/skill');

module.exports = {
    index,
    show
  };

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

function show(req, res) {
    const skill = Skill.getOne(req.params.id)
    res.render('skills/show', { skill });
}