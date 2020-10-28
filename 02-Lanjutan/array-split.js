/**method split() adalah kebalikan dari join() 
method ini mengubah string menjadi array*/
function panggilSplit(){
    var kalimat = "kita sedang belajar js";
    console.log(typeof kalimat);
    console.log(kalimat);

    var result = kalimat.split(" ");
    console.log(typeof result);
    return result;
}
console.log(panggilSplit());