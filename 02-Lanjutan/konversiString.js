//Konversi ke String dengan method toString() dan valueOf()
function konversi(){
    var data = new String("Belajar Kuy..");
    console.log(typeof data); //mengecek tipe data, hasil : object
    console.log(data);
    var konversi1 = data.toString(); //cara 1, mengubah object ke string
    console.log(typeof konversi1);
    console.log(konversi1);
    var konversi2 = data.valueOf(); //cara 2, mengubah object ke string
    console.log(typeof konversi2);
    console.log(konversi2);
}
konversi();