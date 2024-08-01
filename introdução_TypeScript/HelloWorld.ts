console.log("Hello World");

//Variáveis e constantes tipadas
let mensagem: string = "Bem-vindo";
let quantidade: number = 40;
let precos: number = 8.50;
let estaAtualizado: boolean = false;

const time: string = "Time 76"

//Funções tipadas
function multiplicarPorCinco(valor: number): number{
    return valor = 5;
    
}

let resultado: number = multiplicarPorCinco(5);
console.log(resultado);

//Interfaces
// Servem para definir a estrutura de objetos
// Classes são usadas para instanciar objetos, mas em alguns casos não queremos instanciar, queremos usar só um molde, um padrão que siga uma tipagem e para isso usamos uma interface ex: pessoa = nome, idade;
// a interface é um contrato ela define como esse objeto irá ser apresentado

interface Ipessoa{
    nome: string;
    idade: number;
    
}
//exemplo sem interface
let p1 = { 
    nome: "Daphiny",
    sobrenome: "Goes",
    profissão: "desenvolvedora"

}
//exemplo com interface (com ctrl + espaço ele puxa as informações pré definidas na interface Ipessoa, criando uma padronização na estrutura)
let p2: Ipessoa = {
    nome: "Ariel",
    idade: 48 
}