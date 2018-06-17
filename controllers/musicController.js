exports.add_new_song = function(req,res){
    res.render('upload');
};

exports.upload_song = function(req,res){
    console.log(req.file);
};