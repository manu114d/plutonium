const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher
    if(!authorId){
        return res.send("author id is required")
    }else if(!await authorModel.findOne({_id:authorId})){
        return res.send("author Id is not valid")
    }else if(!publisherId){
        return res.send("publisher id is required")
    }else if(!await publisherModel.findOne({_id:publisherId})){
        return res.send("publisher Id is not valid")
    }
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate(['author', 'publisher'])
    res.send({data: books})
}

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})
// }


const update = async function (req, res) {
    let abc = await publisherModel.find({name : ['Penguin', 'HarperCollins']}).select({_id : 1})
    let abc1 = await bookModel.updateMany({publisher: abc }, {$set: {isHardCover: true}})
    res.send({data: abc1})
}

const ratings = async function (req, res){
        let def = await authorModel.find({rating : {$gt : 3.5}}).select({_id : 1})
        let def1 = await bookModel.updateMany({author: def}, {$inc : {price: +10}})
        res.send({data : def1})
}

module.exports.ratings = ratings
module.exports.update = update
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
