const express = require('express');
const router = express.Router();
const partsCtrl = require('../controllers/parts');


router.get('/', partsCtrl.index);
router.get('/new', partsCtrl.new);
router.get('/:id', partsCtrl.show);
router.post('/', isLoggedIn, partsCtrl.create);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;