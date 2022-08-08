const express = require('express');
const abc = require('../introduction/intro')
const abc1 = require('../util/helper.js')
const abc2 = require('../logger/logger.js')
const abc3 = require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    abc1.printDate()
    abc1.printMonth()
    abc1.getBatchInfo()
    abc2.printName()
    abc3.trim()
    abc3.toLocaleUpperCase()
    abc3.toLocaleLowerCase()

    // logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})
// 1
router.get('/movies', function(req, res){
    let movies = ['Bahubali', 'Super30', 'Vikram', 'KGF'];
    res.send(movies)
})

//  4
router.get('/films', function(req, res){
    let films = [ {
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }]
      
       res.send(films);
})

// 2..................................
// router.get('/movies/:indexNumber', function(req, res){
//     let movies1 = ['Bahubali', 'Super30', 'Vikram', 'KGF'];
//     let index = req.params.indexNumber;
//     console.log(movies1[index]);
//     res.send(movies1[index]);
// })


router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')

})

module.exports = router;