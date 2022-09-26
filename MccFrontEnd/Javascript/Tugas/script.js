// Js adalah high level language yang untype dan scrypting
// untype tidak memiliki tipe data seperti phyton
// scripting bisa berjalan di console browser
console.log("hello world")

let animals = [
    {name:"dory", species:"fish", class:{name:"invertebrata"}},
    {name:"garfield", species:"cat", class:{name:"mamalia"}},
    {name:"nemo", species:"fish", class:{name:"invertebrata"}},
    {name:"tom", species:"cat", class:{name:"mamalia"}},
    {name:"mhs", species:"cat", class:{name:"mamalia"}}
]

console.log(animals);

// For loop
let kucings = [];

for (let i = 0; i < animals.length; i++) {
    if(animals[i].species == "cat"){
        kucings.push(animals[i]);
    }
    
}

console.log(kucings);

// For loop
let nonMamalia = [];

for (let i = 0; i < animals.length; i++) {
    if(animals[i].species == "fish"){
        animals[i].class.name = "non-mamalia";
        nonMamalia.push(animals[i]);
    }    
}

console.log(nonMamalia);

// Enchanced For Loop
let spesiesKucing = [];
for (let kucing of animals) {
    if (kucing.species == "cat") {
        spesiesKucing.push(kucing);
    }
}

console.log(spesiesKucing);

let kucingan = animals.filter(hewan => hewan.species == "cat");

animals.forEach(hewan => hewan.species);
