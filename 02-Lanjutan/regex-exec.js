/**method exec digunakan untuk mengembalikan string yang menemukan kecocokan, 
jika tidak maka akan mengembalikan nilai NULL*/
function panggilRegexp(){
    let data = "Belajar satu tahun bersama FTS";
    let str = new RegExp("FTS");

    console.log(str.exec(data));
}
panggilRegexp();