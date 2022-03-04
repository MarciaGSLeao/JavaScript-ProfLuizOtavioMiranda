function saudacaoBD(nome){
    console.log(`Bonjour ${nome}!!!` );
}
saudacaoBD("Márcia");
saudacaoBD("Felipe");


function saudacaoBD(nome){
    return `Bonjour ${nome}!!!` ;
}
// Podemos também atribuir o valor de uma função a uma variável.
let cumprimentoMarcia = saudacaoBD('Márcia');
console.log(cumprimentoMarcia);


function somaDoisNum(x, y){
    const res = x + y;
    return res;
}
console.log(somaDoisNum(2, 8));


// função anônima
const raiz = function(n){
    return n**0.5;
}
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));


// arrow function
const raiz1 = n => n**0.5;
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));


