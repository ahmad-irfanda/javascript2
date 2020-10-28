// Mengambil kata/huruf pada urutan tertentu
function substring(){
    var kata = 'aku pintar memasak';
    console.log(kata.substr(10)); // memasak
    console.log(kata.substr(3, 10)); // pintar me
    console.log(kata.substr(-3)); //sak
}
substring();