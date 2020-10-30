/**Fungsi encode URI adalah untuk menyandikan URI
 fungsi ini menyandikan karakter khusus kecuali ", / ? : @ = + $ #" */
 var uri = "my test.asp?name=stale&car=saab";
 var res = encodeURI(uri);
 console.log(res);