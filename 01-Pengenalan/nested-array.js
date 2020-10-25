function panggilNestedArray(){
    var dataNama = [["dua", "empat", "enam"],
                    ["delapan", "sepuluh", "dua belas"],
                    ["empat belas", "enam belas", "delapan belas", "dua puluh"]];
    // console.log(dataNama.length);
    // console.log(dataNama[0][0]);
    for(i=0;i<dataNama.length; i++){
        for(j=0; j<dataNama.length;j++){
            console.log(dataNama[i][j]);
        }
    }
}

panggilNestedArray();