const Skill = require('../models/skill');

module.exports = {
    index,
    show, 
    new: newSkill,
    delete: deleteOne,
    update
};

function newSkill(reg, res) {
    res.render('skills/new');
}

function index(req, res) {
    // render points to views folder and uses the data inside
    res.render('skills/index', {
        skills: Skill.getAll(),
        date: req.date
    }); 
};

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
};

function deleteOne(req, res) {
    Skill.delete(req.params.id);
    res.redirect('/skills');
}

function update(req, res) {
    Skill.update(req.params.id, req.body.skill);
    res.redirect(`/skills/${req.params.id}`);
}
