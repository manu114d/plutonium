const express = require('express');
const router = express.Router();
const lodash = require('lodash');
const underscore = require('underscore')

// imports
const abc = require('../introduction/intro')
const loggerModule = require('../logger/logger.js') // 01
const utilModule = require('../util/helper') // 02
const validatorModule = require('../validator/formatter')

// handler
router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    loggerModule.welcome() //01
    utilModule.printDate() // 02
    utilModule.printMonth() // 02
    utilModule.getBatchInfo() // 02
    validatorModule.trim() // 03
    validatorModule.changetoLowerCase() //03
    validatorModule.changetoUpperCase() // 03
    
// ...............................................................

// underscore example
    let weekdend = ['Saturday','Sunday','Monday']
    let results = underscore.first(weekdend, 1)
    console.log('Week end ',results)
    res.send('My second ever api!')

// 01. chunkFunction
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
    let result = lodash.chunk(months, 3);
    console.log("Name of months in 4 arrays -", result)

// 02. tailFunction
    let Odd = [1,3,5,7,9,11,13,15,17,19,];
    let num = lodash.tail(Odd);
    console.log("Last 9 odd numbers -", num);

// 03. unionFunction
    let arr1 = [1,2,3]; 
    let arr2 = [2,4,5];
    let arr3 = [5,6,7];
    let arr4 = [1,8,9];
    let arr5 = [4,8,7];
    let Union = lodash.union(arr1, arr2 ,arr3, arr4, arr5);
    console.log("Union of arrays -", Union)

// 04. fromPairs
    let arr = [['Dhoni', 'Mr.cool'], ['Rohit', 'Hitman'], ['Virat', 'King'], ['Sachin', 'God'], ['Yuvraj', 'Blaster']]
    let object = lodash.fromPairs(arr);
    console.log("Key value pairs of objects", object);
});


// router.get('/test-you', function(req, res){
//     res.send('This is the second routes implementation')
// })

// router.get('/give-me-students-data',function(req, res){

// })
module.exports = router;