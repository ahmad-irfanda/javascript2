/**method search() hampir sama dengan indexOf() dalam pencarian index dalam string 
namun method search() menerima ekspresi regular, dengan kata lain indexOf adalah 
untuk substring polos, search adalah untuk ekspresi reguler.*/
function cari(){
    var isi = "Belajar di ganesha academy dengan fasih";
    console.log(isi.search("di")); //8
    console.log(isi.search(/di/)); //regular expression, 8
}
cari();