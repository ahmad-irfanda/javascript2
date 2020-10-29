//method filter untuk filtering sebuah data array
let peoples = [
    {
        name: "Andi",
        gender: "male"
    }, 
    {
        name: "Siti",
        gender: "female"
    }, 
    {
        name: "Sindi",
        gender: "female"
    }
];

let female = peoples.filter(people => {
    return people.gender === "female";
});

console.log(female);