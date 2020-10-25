function tipedata(){
    var data = 2;
    console.log(typeof(data));

    if(data === 2){
        return 'sukses';
    }else{
        console.log("gagal");
    }
}

function tipedata2(){
    var data = '2';
    console.log(typeof(data));

    if(data == 2){
        return 'sukses';
    }else{
        console.log("gagal");
    }
}

console.log(tipedata());
console.log(tipedata2());