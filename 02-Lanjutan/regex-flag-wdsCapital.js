/**Regular Expression - NOT (Huruf - Angka dan Spasi) */
function panggilRegexp(value){
    //flag W mengambil semua karakter kecuali huruf & angka
    var ambilData = value.match(/\W/g);
    console.log('Flag W: ', ambilData);

    //flag D mengambil semua karakter & spasi kecuali angka
    var ambilData2 = value.match(/\D/g);
    console.log('Flag D: ', ambilData2);

    //flag S mengambil semua karakter kecuali spasi
    var ambilData3 = value.match(/\S/g);
    console.log('Flag S: ', ambilData3);
}
panggilRegexp("Bulan ke 1 sd ke 4");