const express = require('express');
const router = express.Router();
const partsCtrl = require('../controllers/parts');

router.get('/', partsCtrl.index);
router.get('/new', partsCtrl.new);
//router.post('/', partsCtrl.create);
router.get('/:id', partsCtrl.show);


module.exports = router;