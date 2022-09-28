// Declaração de função (Function Hoisting):
// é a capacidade que uma função tem de poder se 'chamada' independente de onde ela se encontre no arquivo.
// Uma vez que ela foi criada no arquivo, a mesma pode ser acionada no início ou no fim do programa.

sayHello();

function sayHello(){
    console.log(`Hello!`);
}
sayHello();

// Uma função também pode ser atribuída a uma variável ou constante e portanto ser tratada como um dado.
const sayGoodMorning = function() {
    console.log("Good Morning!");
}
sayGoodMorning();

// Uma função pode receber outra função como parâmetro.
function executaFuncao(funcao) {
    console.log("Vou executar a função abaixo: ")
    funcao();
}
executaFuncao(sayGoodMorning);

// Arrow function. O conceito de arrow function é similar ao que chama-se como expressões lambdas no Java.
const arrowFunction = () => {
    console.log("Hello! Eu sou uma 'arrow function'");
}
arrowFunction();

// Uma função também pode ser criada dentro de um objeto, como se fosse um método do objeto.
const pessoa = {
    habilidade: function(){
        console.log("Falar......")
    }
}
pessoa.habilidade();
