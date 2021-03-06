var Song = require('../models/Song');
var NodeID3 = require('node-id3');
var fs = require('fs');

exports.add_new_song = function(req,res){
    res.render('upload');
};

exports.upload_song = function(req,res){
    //console.log(req.file);
    NodeID3.read(req.file.path,function(err,tags){
        if(err) throw err;
        //console.log(tags);
        var song = new Song({
            title:tags.title,
            album:tags.album,
            artist:tags.artist,
            image:new Buffer(tags.image.imageBuffer,'hex').toString('base64'),
            filepath:req.file.path
        });

        song.save((err)=>{
            if(err) throw err;
            console.log("New song added");
        });
    });
    res.redirect('/');
};

exports.song_list = function(req,res){
    Song.find().exec(function(err,songs){
        if(err) throw err;
        res.render('songs',{songs:songs});
    });
};

exports.view_song = function(req,res){
    Song.findById(req.params.id).exec(function(err,song){
        if(err) throw err;
        res.render('view_song',{song:song});
    });   
};

exports.play_song = function(req,res){
    var id = req.params.id;
    Song.findById(id).exec(function(err,song){
        if(err) throw err;
        var readable = fs.createReadStream(song.filepath);
        var stat = fs.statSync(song.filepath);
        res.writeHead(200,{'Content-Type':'audio/mpeg','Content-Length':stat.size});
        readable.pipe(res);
    });
};