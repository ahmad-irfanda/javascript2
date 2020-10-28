/*foreach() digunakan untuk perulangan pada array
ada 3 parameter yang bisa kita ubah namanya sesuka kita
jika ingin hanya menampilkan data array, maka cukup gunakan parameter item*/
function panggilForEach(){
    var data = ['a', 'b', 'c'];
    data.forEach(function (item, index, array){
        console.log(item);
        console.log(index);
        console.log(array);
    })
}
panggilForEach();