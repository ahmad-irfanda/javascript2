function panggilObjects(){
  var mobil = {
    type: "Sedan",
    harga: 200000000,
    warna: "Putih",
  }
  mobil.type = "kijang";
  mobil.type = 9500;
  mobil.type = true;
  mobil.tahun = 2018; //menambahkan property tahun
  mobil.harga = 100000000;
  console.log(mobil);
  console.log(mobil.harga);
}

panggilObjects();
