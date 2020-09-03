const express = require('express');
const router = express.Router();
const issuesCtrl = require('../controllers/issues');



router.get('/new', isLoggedIn, issuesCtrl.new);
router.post('/',isLoggedIn, issuesCtrl.create);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
