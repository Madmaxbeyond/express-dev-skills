const skills = [
    {skill: 'JavaScript', level: 5},
    {skill: 'HTML', level: 8},
    {skill: 'CSS', level: 4},
];

module.exports = {
    getAll,
    getOne,
    update,
    delete: deleteOne
};

function getOne(skill) {
    return skills.find(skill => skill.skill === skill);
}

function getAll() {
    return skills;
}

function update(id, updatedSkill) {
    return skills[id] = updatedSkill;
    // const skill = skills.find(skill => skill.skill === )
}

function deleteOne(id) {
    return skills.splice(id, 1);
}

