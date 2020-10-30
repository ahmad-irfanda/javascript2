/**Fungsi Regular Expression / Regex adalah method yang sering 
digunakan untuk mencari / mengganti pada sebuah data string*/
function panggilRegexp(){
    let str = "abcdefghijklmnopqrstuvmxyz";

    return str.search(/a/);
}
console.log(panggilRegexp());