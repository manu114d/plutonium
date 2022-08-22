const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
            authorName:String,
            age:Number,
            address:String,
            rating: Number
}, { timestamps: true });
// const authorSchema = new mongoose.Schema( {
//     author_id: String,
//     author_name: String,
//     age:Number,
//     address:String

// }, { timestamps: true });

module.exports = mongoose.model('newAuthor', authorSchema)
