var express = require('express');
var router = express.Router();

var loginController = require('../controllers/loginController');

/* GET home page. */
router.get('/', function(req, res, next) {
  //var usr=req.session.user;
  res.render('index', { title: 'Express'});
});



router.get('/login',loginController.login);
router.post('/authenticate',loginController.authenticate);
router.get('/signup',loginController.signup);
router.post('/newuser',loginController.newuser);

module.exports = router;
