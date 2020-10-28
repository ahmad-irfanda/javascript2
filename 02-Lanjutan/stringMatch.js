/**output method match() menghasilkan array dan menerima regular expression*/
function match(){
    var isi = "Saya pintar memasak nasi goreng";
    console.log(isi.match("pintar")); //5
    console.log(isi.match("goreng")); //25
    console.log(isi.match(/goreng/)); //25, regular expression
}
match();