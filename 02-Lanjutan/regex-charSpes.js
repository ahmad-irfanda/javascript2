/**Karakter spesifik Regular Expression. RegExp memiliki sebuah flag/tanda. 
flag tersebut nantinya akan memberikan efek/hasil yang berbeda pada setiap pencarian*/
function panggilRegexp(value){
    var ambilData = value.match(/[ke]/g); //spesifik
    var ambilData2 = value.match(/ke/g);

    console.log(ambilData);
    console.log(ambilData2);
}
panggilRegexp("Bulan ke 1 sd ke 4");