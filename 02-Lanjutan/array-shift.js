// Memanipulasi Array Dengan Shift
//fungsi shift() untuk menghapus/mengambil elemen array paling awal
function panggilShift(){
    var kota = ['jakarta', 'bandung', 'malang', 'surabaya'];
    console.log(kota);
    console.log('====================');

    // kota = kota.shift();
    var kota2 = kota.shift();//jakarta
    console.log(kota2);
    return kota;//['bandung','malang','surabaya']
}

console.log(panggilShift());