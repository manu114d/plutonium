const express = require("express");
const router = express.Router();
// const abc = require('../introduction/intro')

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     logger.welcome()

//     res.send('My second ever api!')
// });

router.get("/students", function (req, res) {
  let students = ["Sabiha", "Neha", "Akash"];
  res.send(students);
});

router.get("/student-details/:name", function (req, res) {
  /*
        params is an attribute inside request that contains 
        dynamic values.
        This value comes from the request url in the form of an 
        object where key is the variable defined in code 
        and value is what is sent in the request
        */

  let requestParams = req.params;

  // JSON strigify function helps to print an entire object
  // We can use any ways to print an object in Javascript, JSON stringify is one of them
  console.log("This is the request " + JSON.stringify(requestParams));
  let studentName = requestParams.name;
  console.log("Name of the student is ", studentName);

  res.send("Dummy response");
});

// 1.............................................
router.get("/movies", function (req, res) {
  let movies = ["Bahubali", "Super30", "Vikram", "KGF", "Robo"];
  res.send(movies);
});

// 2.................................................
router.get("/movies/:indexNumber", function (req, res) {
  let movies1 = ["Bahubali", "Super30", "Vikram", "KGF"];
  let index = req.params.indexNumber;
  console.log(movies1[index]);
  res.send(movies1[index]);
});

//3......................................
router.get("/get-movies/:indexNumber", function (req, res) {
  let moviesName = [
    "rang de basanti",
    "The shining",
    "Lord of the rings",
    "batman begins",
  ];
  let index = req.params.indexNumber;

  if (index > moviesName.length) {
    return res.send("use a valid index number ");
  } else {
    res.send(moviesName[index]);
  }
});

//  4..............................................
router.get("/films", function (req, res) {
  let films = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Nemo",
    },
  ];

  res.send(films);
});

// 5....................................................
router.get("/films/:filmId", function (req, res) {
  let moviesName = [
    { id: 0, name: "The Shining" },
    { id: 1, name: "Incendies" },
    { id: 2, name: "Rang de Basanti" },
    { id: 3, name: "Finding Nemo" },
  ];

  count = 0;
  let filmId = req.params.filmId;
  for (let i = 0; i < moviesName.length; i++) {
    if (moviesName[i].id == filmId) {
      res.send(moviesName[i]);
      count++;
    }
  }
  if (count === 0) {
    res.send("no such movies found with this id");
  }
});
module.exports = router;
