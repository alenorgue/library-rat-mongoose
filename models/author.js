const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    firstName: String,
    familyName: String,
    dateBirth: Date,
    dateDeath: Date
}, { collection: 'authors' }); 

const Author = new mongoose.model('Authors', authorSchema);
module.exports = Author;