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
