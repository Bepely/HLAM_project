const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: String,
    genre: String,
    autorid: String
    
});

module.exports = mongoose.model('Post', postSchema)