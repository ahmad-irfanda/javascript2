// Memanipulasi Array Dengan Pop
//fungsi pop() untuk menghapus/mengambil elemen array paling akhir
function panggilPop(){
    var kota = ['jakarta', 'bandung', 'malang', 'surabaya'];
    console.log(kota);//before
    kota.pop();
    return kota;//after
}

console.log(panggilPop());