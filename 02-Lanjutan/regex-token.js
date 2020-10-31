/**Token regular expression dikelompokkan berdasarkan fungsinya
ada yang dipakai untuk definisi jenis karakter dan untuk menentukan batas
contoh dari pengelompokkan token ini didefinisikan sebagai jenis karakter.
'.' artinya sembarang karakter /d sembrang angka 0-9 -D sembarang karakter yang bukan angka
/w sembarang angka atau huruf kecil & besar termasuk underscore, /W huruf angka dan underscore
/s untuk karakter whitespace, tab, atau linebreak*/
var s = "ini ibu budi \n bukan bapaknya.";
var re = /./g;
console.log(s.match(re));

var s2 = "sempurna..";
var re2 = /\./g;
console.log(s2.match(re2));