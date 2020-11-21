var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');


router.get('/', skillsCtrl.index);

router.get('/', skillsCtrl.new);

router.get('/:skill', skillsCtrl.show);



module.exports = router;
