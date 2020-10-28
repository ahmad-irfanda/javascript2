// method slice() untuk mengcopy atau mengambil sebagian dari isi array
function slice2(){
    var isi = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    var copy = isi.slice();
    console.log(copy); //['a', 'b', 'c', 'd', 'e', 'f', 'g']
    console.log(isi.slice(3)); //['d', 'e', 'f', 'g']
    console.log(isi.slice(3,4)); //['d']
    console.log(isi.slice(-5)); //['c', 'd', 'e', 'f', 'g']
}
slice2();