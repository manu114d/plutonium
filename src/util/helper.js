const myDate = new Date();
const nDate = myDate.getDate();
const nMonth = myDate.getMonth(); 

const printDate = function(){
    console.log("Today's date is", nDate);
}

const printMonth = function(){
    console.log("Current Month is", nMonth+1);
}
const topic = "Nodejs module system";
const getBatchInfo = function(){
    console.log("Plutonium, W3D5, The topic for today was ", topic);
}
// module.exports.nDate = nDate;
module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;