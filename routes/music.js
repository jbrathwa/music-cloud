var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest:'public/uploads'});


var musicController = require('../controllers/musicController');

router.get('/addsong',musicController.add_new_song);
router.post('/upload',upload.single('song'),musicController.upload_song);


module.exports = router;