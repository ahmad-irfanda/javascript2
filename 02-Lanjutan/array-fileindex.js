/**method array findIndex() untuk mengembalikan index elemen pertama 
 dalam array yang memenuhi fungsi pengujian yang telah disediakan 
 jika tidak dia akan mengembalikan nilai -1 / elemen tidak lulus kriteria
 hasil yang ditampilkan adalah index dari array tersebut*/
 var array1 = [5, 12, 8, 130, 44];

 function isLargeNumber(element){
     return element > 13; //3
    //  return element > 100; //3
 }

 console.log(array1.findIndex(isLargeNumber));