var express = require('express');
const skills = require('../controllers/skills');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');


router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new);

router.post('/', skillsCtrl.create);

router.get('/:id', skillsCtrl.show);

router.delete('/:id', skillsCtrl.delete);

router.get('/:id/edit', skillsCtrl.edit);

router.put('/:id', skillsCtrl.update);

module.exports = router;
