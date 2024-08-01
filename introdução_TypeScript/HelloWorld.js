

// variável LET
let turma = "turma 76";
let idade = 16;
let preco = 8.9;
let aprovado = true; //boolean

//variável CONST
const texto = "Hello World";

aprovado = "aprovado" //String

console.log(texto);
// substitui o System.out.println();

console.log(aprovado);

//concatenação
console.log("A nossa turma é:" + "turma");

//interpolação (forma mais "elegante" do que a concatenação)
//O símbolo ${} em JavaScript é usado para interpolar variáveis ​​em strings literais.
//a string que recebe a interpolação, deve ser declarada com uso da crase ( ` ) no lugar das aspas ( '' ).
console.log(`A nossa turma é: ${turma}`);

//Funções
function somar(num1, num2){
    return num1 + num2;
}

console.log(`o resultado da soma 5 + 5 é: ${somar(5,5)}`);

//Arrow functions
let subtrair = (num1, num2) => { return num1 - num2} // ou (x, y) {x - y}

console.log(`o resultado da subtração de 5 menos 3 é: ${subtrair(5,3)}`);