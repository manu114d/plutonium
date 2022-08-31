const myDate = new Date();
const currDate = myDate.getDate();
const currMonth = myDate.getMonth() + 1 ;

const printDate = function(){
    console.log("Today's date is " + currDate);
}  

const printMonth = function(){
    console.log("Current Month is " + currMonth);
}

const batchName = "Plutonium"
const weekDay = "W3D5"
const topic = "Nodejs Modules System"
const getBatchInfo = function(){
    console.log("Batch-Name: " + batchName + ", Week and Day: "+ weekDay + ", Topic: "+ topic);
}

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;