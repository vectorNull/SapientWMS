const express = require('express');
const router = express.Router();
const partsCtrl = require('../controllers/parts');


router.get('/', partsCtrl.index);
router.get('/new', partsCtrl.new);
router.get('/:id', partsCtrl.show);
router.post('/', partsCtrl.create);



module.exports = router;