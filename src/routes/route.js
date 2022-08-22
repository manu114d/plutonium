const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor )

// router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.post("/createPublisher", publisherController.createPublisher)

router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.put('/update', bookController.update)
router.put('/ratings', bookController.ratings)
module.exports = router;


// controllers/authorController.js
//         modified:   controllers/bookController.js
//         modified:   index.js
//         modified:   models/authorModel.js
//         modified:   models/bookModel.js
//         modified:   routes/route.js