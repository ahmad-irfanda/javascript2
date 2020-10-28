//method startsWith() untuk mencari kata di awal kalimat
//method endsWith() untuk mencari kata di akhir kalimat
function StartEnd(){
    var starte = "Kalau saya pintar memasak nasi goreng teri";
    console.log(starte.startsWith("Kalau")); //true
    console.log(starte.endsWith("goreng")); //false
    console.log(starte.startsWith("saya", 6)); //true
}
StartEnd();