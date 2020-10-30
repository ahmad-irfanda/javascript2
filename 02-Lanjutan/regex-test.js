/** perintah test di regular expression adalah untuk 
 * melakukan pencocokan data didalam string, output 
 * yang dihasilkan adalah boolean*/
function panggilRegexp(){
    let data = "belajar satu tahun bersama FTS";

    console.log(/satu/.test(data));
}
panggilRegexp();