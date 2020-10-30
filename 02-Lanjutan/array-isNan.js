/*Method Array isNan() akan me return nilai true jika 
terdapat data yang bernilai not a number*/
function panggilIsNan(){
    var a = isNaN([1,2,3,4,5]);
    var b = isNaN([123]);
    var c = isNaN('hai');

    console.log(a); //type object, true
    console.log(b); //type number, false
    console.log(c); //type string, true
}
panggilIsNan();