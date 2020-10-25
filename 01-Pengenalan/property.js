function panggilObjects(){
  var mobil = {
    type: "Sedan",
    harga: 200000000,
    warna: "Putih",
    tahun: [2001, 2002, 2003, 2004]
  }
  mobil.harga = 100000000;
  console.log(mobil);
  console.log(mobil.harga);
}

panggilObjects();
