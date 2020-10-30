/**fungsi decode URI merupakan kebalikan dari encode URI
fungsi ini untuk memecahkan kode URI */
var a = "my%20test.asp?name=stale&car=saab";
var res = decodeURI(a);
console.log(res);