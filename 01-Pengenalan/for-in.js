function panggilObject(){
  let mahasiswa = {
    nama: "Adi",
    umur: 23,
    jurusan: "Teknik Informatika",
    semester: 7,
  }
  for(let x in mahasiswa){
    console.log(mahasiswa[x]);
  }
}

panggilObject();
