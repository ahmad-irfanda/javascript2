/**penggantian data pada sebuah string didalam regular expression
*/
function panggilRegexp(){
    let data = "belajar satu tahun bersama FTS";
    
    console.log(data.replace(/satu/, '1'));
}
panggilRegexp();