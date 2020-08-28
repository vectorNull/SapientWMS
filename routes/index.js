var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/parts',
    failureRedirect : '/parts'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/parts');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/parts');
});

module.exports = router;
