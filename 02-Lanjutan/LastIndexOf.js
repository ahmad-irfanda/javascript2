/**Method lastIndexOf() hampir sama dengan method indexOf()
hanya saja pencarian index string dimulai dari akhir string*/
function last(){
    var isi = "Belajar bahasa di sekolah dan mempelajari bahasa java";
    console.log(isi.lastIndexOf("bahasa"));
    console.log(isi.lastIndexOf("bahasa", 40));
}
last();