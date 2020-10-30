/*Method isfinite akan me return nilai false, jika terdapat 
data dengan positive infinite, negative infinite, atau not number (string).
dan akan bernilai true jika memiliki data yang finite / terbatas
*/
function panggilIsFinite(){
    var a = isFinite([1,2,3,4,5]);
    var b = isFinite(['jakarta', 'lampung', 'depok']);
    var c = isFinite([1,2,3,'Hello','My Self']);
    var d = isFinite(-99924.23);

    console.log(a); //false
    console.log(b); //false
    console.log(c); //false
    console.log(d); //true
}

panggilIsFinite();