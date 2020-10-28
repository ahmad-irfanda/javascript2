/*map() digunakan untuk melakukan perulangan 
berdasarkan jumlah data array yang menjadi acuan dalam perulangan tersebut.
method map() mirip seperti foreach()*/
function panggilPerintahMap(){
    var datakota = ['jakarta', 'balikpapan', 'medan'];
    datakota.map((item, index, array) =>{
        console.log(item);
        console.log(index);
        console.log(array);
    });
}
panggilPerintahMap();