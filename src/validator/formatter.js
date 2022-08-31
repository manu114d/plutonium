let data = "     MANU   deep   sai      ";
let trimmer =  data.trim();
let trim = function(){
    console.log(trimmer);
}
// let b = function(){
//     let aa = a.trim(); // manu deep sai
//     console.log(aa);
// }


// let data2 = "MANUDEEP";
let lowerCase = data.toLocaleLowerCase();
let changetoLowerCase = function(){
    console.log(lowerCase);
}

// let data3 = "manudeep";
let upperCase = data.toLocaleUpperCase();
let changetoUpperCase = function(){
    console.log(upperCase);
}

module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changetoUpperCase = changetoUpperCase
// module.exports.trim =trim;
// module.exports.toLocaleLowerCase =toLocaleLowerCase;
// module.exports.toLocaleUpperCase =toLocaleUpperCase;

