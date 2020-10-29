/**method Filtering Array some() hampir sama dengan method every()
namun method some() akan me return nilai true jika
 salah satu data sudah memiliki kriteria tersebut*/
 let products = [
    {name: "Apple", type: "fruit"},
    {name: "Monitor", type: "computer"},
    {name: "Mango", type: "fruit"},
    {name: "Table", type: "furniture"},
];

// hasil true karna 'type' yang ada terdapat "fruit"
//Cara 1
// console.log(
//     products.some(product => product.type === "fruit")
// );

// Cara 2
let fruit = products.some(product => product.type === "fruit");
console.log(fruit);

// Cara 3
// let fruit = products.some(product => {
//     return product.type === "fruit";
// });
// console.log(fruit);