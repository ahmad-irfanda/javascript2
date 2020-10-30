/*Method Array reduce() digunakan untuk mengakumulasikan 
atau mengurangi nilai berdasarkan elemen didalam array*/
const array1 = [1,2,3,4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// menjumlahkan elemen didalam array
console.log(array1.reduce(reducer)); //10
console.log(array1.reduce(reducer, 5)); //15

//contoh 2
var bali = [
	{ regency:'Jembrana', population:114863 },
	{ regency:'Tabanan', population:209308 },
	{ regency:'Badung', population:277536 },
	{ regency:'Gianyar', population:208443 },
	{ regency:'Klungkung', population:79233 },
	{ regency:'Bangli', population:106166 },
	{ regency:'Karangasem', population:193787 },
	{ regency:'Buleleng', population:294418 },
	{ regency:'Denpasar', population:403292 }
];

var sum = bali.reduce(function(val, element) {
	return val + element.population;
}, 0);

console.log("Jumlah Penduduk Bali dari tiap kabupaten/kota adalah", sum) // 1887046