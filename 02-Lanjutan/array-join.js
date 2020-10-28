/*method join() mengubah array menjadi string
kebalikan method join() adalah split()*/
function panggilJoin(){
    var kota = ['jakarta', 'medan', 'malang', 'tangerang'];
    console.log(typeof kota);
    console.log(kota);
    var result = kota.join(","); //pemisah adalah ,
    console.log(typeof result);
    return result;
}
console.log(panggilJoin());