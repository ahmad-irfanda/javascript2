// method concat() untuk menggabungkan elemen array pada variabel yang berbeda
function panggilConcat(){
    var kota = ['jakarta', 'tangerang', 'bandung', 'malang'];
    var kabupaten = ['Kab cilacap', 'Kab Garut', 'Kab Tasikmalaya'];
    var hasil = kota.concat(kabupaten);
    return hasil; 
}
console.log(panggilConcat());