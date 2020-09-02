const express = require('express');
const router = express.Router();
const invoicesCtrl = require('../controllers/invoices');

router.post('/invoices', isLoggedIn, invoicesCtrl.create);
router.get('/invoices/new', invoicesCtrl.new);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}
module.exports = router;
