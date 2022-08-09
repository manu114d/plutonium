const express = require('express');
const lodash = require('lodash');
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

    // 4
    const months = ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];
    const result = lodash.chunk(months, 3);
    console.log(result);

    const oddNum = [1,3,4,5,7,9,11,13,15,17]
    const result1 = lodash.tail(oddNum, 9);
    console.log(result1);

    const arr1 = [1,3,4,3];
    const arr2 = [5,1,6,9];
    const arr3 = [54,12,76];
    const arr4 = [3,6,12,76];
    const arr5 = [12,3,9];
    const result2 = lodash.union(arr1, arr2, arr3, arr4, arr5);
    console.log(result2);

    const arra = [ ['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']];
    const result3 = lodash.fromPairs(arra);
    console.log(result3);
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