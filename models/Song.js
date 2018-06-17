var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var songSchema = new Schema({
    title:String,
    album:String,
    artist:[String],
    image:String,
    filepath:String
});


module.exports = mongoose.model('Song',songSchema);