const skills = [
    {id: 3746, skill: 'JavaScript', level: 5},
    {id: 4806, skill: 'HTML', level: 8},
    {id: 2897, skill: 'CSS', level: 4},
];

module.exports = {
    getAll,
    getOne,
    update,
    deleteOne,
    create
};

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function getAll() {
    return skills;
}

function update(id, updatedSkill) {
    const skill = skills.find(skill => skill.id === parseInt(id));
    Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 10000;
    if(!skill.skill) return;
    skills.push(skill);
}