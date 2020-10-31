/**Regular Expression memiliki sebuah flags atau bisa disebut 
sebagai “TANDA”, dimana flags tersebut nantinya akan memberikan 
effect / hasil yang berbeda pada setiap pencarian antara yang menggunakan flags dan yang tidak.*/
function panggilRegexp(value){
    let str = "abcdefghijklmnopqrstuvwxyz";

    // i mengabaikan lowercase dan uppercase
    console.log(str.search(/K/)); //-1
    console.log(str.search(/K/i)); //10
    console.log(str.search(/k/i)); //10
}
panggilRegexp();