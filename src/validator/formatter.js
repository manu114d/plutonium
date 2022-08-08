let a = "     manu   deep   sai      ";
let b =  a.trim();
let trim = function(){
    console.log(b);
}
// let b = function(){
//     let aa = a.trim(); // manu deep sai
//     console.log(aa);
// }


let a1 = "MANUDEEP";
let b1 = a1.toLocaleLowerCase();
let toLocaleLowerCase = function(){
    console.log(b1);
}

let a2 = "manudeep";
let b2 = a2.toLocaleUpperCase();
let toLocaleUpperCase = function(){
    console.log(b2);
}


module.exports.trim =trim;
module.exports.toLocaleLowerCase =toLocaleLowerCase;
module.exports.toLocaleUpperCase =toLocaleUpperCase;

