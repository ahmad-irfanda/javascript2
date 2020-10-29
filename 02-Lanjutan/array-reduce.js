/*Method Array reduce() digunakan untuk mengakumulasikan 
atau mengurangi nilai berdasarkan elemen didalam array*/
const array1 = [1,2,3,4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// menjumlahkan elemen didalam array
console.log(array1.reduce(reducer)); //10
console.log(array1.reduce(reducer, 5)); //15