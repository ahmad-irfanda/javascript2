function nestedObject(){
  let mahasiswa = {
    nama: 'ilham',
    ipk: {
      semester1: 3.5,
      semester2: 3.75,
      semester3: 4,
      semester4: 3.4
    }
  }
  console.log(mahasiswa.ipk.semester3);
}

nestedObject();
