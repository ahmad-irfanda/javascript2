/**flag g memiliki fungsi ketika kita ingin melakukan 
pencocokan terhadap sebuah data yang ingin kita cari*/
function panggilRegexp(){
    let str = "abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz";
    
    // Dengan Flag/Tanda g
    console.log(str.match(/c/g));
    
    /**Tanpa Flag/Tanda g, maka c hanya akan menampilkan 1x dan 
    proses berhenti ketika sudah regExp sudah menemukan karakter c*/
    console.log(str.match(/c/));
}
panggilRegexp();