var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  var upload = multer({ storage: storage });

var musicController = require('../controllers/musicController');

router.get('/addsong',musicController.add_new_song);
router.post('/upload',upload.single('song'),musicController.upload_song);
router.get('/songs',musicController.song_list);
router.get('/songs/:id',musicController.view_song);
router.get('/songs/:id/play',musicController.play_song);


module.exports = router;