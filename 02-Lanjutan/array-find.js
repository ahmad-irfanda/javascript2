/**method Array find() digunakan untuk mengembalikan nilai dari 
 elemen pertama dari sebuah array yang memenuhi fungsi 
 pengujian yang telah disediakan
 hasil yang ditampilkan adalah value dari array tersebut*/

var array1 = [5, 12, 8, 120, 44];
var found = array1.find(function(element){
    return element > 10; //12
    //return element > 100;//120
});
console.log(found);