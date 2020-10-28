// Memanipulasi Array Dengan Splice
function panggilSplice(){
    var kota = ['jakarta','medan','padang','malang'];
    console.log(kota);
    //menambahkan data
    // kota.splice(2,0,'palembang');
    //menghapus data
    kota.splice(2,1);
    return kota;
}
console.log(panggilSplice());