/** Regular Expression - Flag w, d, dan s*/
function panggilRegexp(value){
    //flag w mengambil karakter huruf & angka, kecuali spasi
    var ambilData = value.match(/\w/g);
    console.log("flag w: ", ambilData);

    //flag d hanya mengambil karakter angka
    var ambilData2 = value.match(/\d/g);
    console.log("flag d: ", ambilData2);

    //flag s hanya mengambil whitespace/spasi
    var ambilData3 = value.match(/\s/g);
    console.log("flag s: ", ambilData3);
    console.log("Banyaknya spasi", ambilData3.length);
}
panggilRegexp("Bulan ke 1 sd ke 4");