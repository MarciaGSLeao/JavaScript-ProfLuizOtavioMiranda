const nome = "Márcia";
const sobrenome = "Gameleira";
let idade = 31;
let peso = 60;
let altura = 1.58;
const imc = (peso/(altura**2));
const anoNascimento = 1990;

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg, tem", altura, "de altura e seu IMC é", imc.toFixed(2));
console.log(nome, sobrenome, "nasceu em", anoNascimento);
console.log("");

// Template Stings
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso}kg, tem ${altura} de altura e seu IMC é ${imc.toFixed(2)}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
console.log("");
