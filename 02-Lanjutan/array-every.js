/**method Filtering Array every() mirip dengan array some()
 * fungsi nya untuk menentukan sebuah data dalam sebuah array
 * memenuhi kriteria tertentu. method every() hanya akan me return 
 * nilai true jika semua data nya sesuai kriteria
*/
let products = [
    {name: "Apple", type: "fruit"},
    {name: "Monitor", type: "computer"},
    {name: "Mango", type: "fruit"},
    {name: "Table", type: "furniture"},
];

// hasil false karna 'type' yang ada tidak hanya "fruit"
//Cara 1
// console.log(
//     products.every(product => product.type === "fruit")
// );

// Cara 2
// let fruit = products.every(product => product.type === "fruit");
// console.log(fruit);

// Cara 3
let fruit = products.every(product => {
    return product.type === "fruit";
});
console.log(fruit);