var s = "abCD123 efg456 !@#$%^_";

//output angka
console.log(s.match(/\d/g));

//output selain angka
console.log(s.match(/\D/g));

//output angka, huruf, underscore
console.log(s.match(/\w/g));

//output selain angka, huruf, dan underscore
console.log(s.match(/\W/g));

//output whitespace
console.log(s.match(/\s/g));