// //DECLARARAÇÕES E VARIAVEIS

// var nome ="fiap";
// console.log(nome);

// let idade = 19;
// console.log(idade)

// const sobrenome="Fiapinho";
// console.log(sobrenome)

// //declarando uma variavel indefinida
// let nome1;
// console.log(nome1)

// //declarando uma variavel nula
// let nome2=null;
// console.log(nome2)

// //TIPOS DE VARIAVEIS

// let exemplo1 =10;
// console.log(typeof exemplo1)

// let exemplo2 ="Tecnologia";
// console.log(typeof exemplo2)

// let exemplo3 =true;
// console.log(typeof exemplo3)

// let exemplo4={};
// console.log(typeof exemplo4)

// let exemplo5 =[];
// console.log(typeof exemplo5)

// //CONVERSÕES

// let numFloat =123.456;
// console.log(parseInt(numFloat));

// let numString ="123.456";
// console.log(parseFloat(numString));

// //METODOS

// //length = verifica o tamanho da string
// let frase ="O mundo da tecnologia";
// console.log(frase.length);

// //indexOf -retorna um trecho do texto

// let texto="A programação indomável e sustentavel";
// console.log(texto.indexOf(""))


// //slice - retorna um trecho do texto com inicio e final

// let info ="Processamento de ponta";
// console.log(info.slice(16,25))

//OPERADORES ARITIMÉTICOS

// const num1=10;
// const num2=20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// OPERADORES LÓGICOS

// const num3=20;
// const num4="30";

// console.log(num3 < num4);
// console.log(num3 > num4 && num4 < num3);
// console.log(num3 < num4 || num4 < num3); 

// //OPERADORES DE COMPARAÇÃO

// console.log(num3 == num4);
// console.log(num3 === num4);

//ESTRUTURA CONDICIONAL

//if
let logado="fiap";

if(logado=="fiap"){
    console.log("é verdadeiro")
}

//if/else
let usuario="teste"

if(usuario =="teste"){
    console.log("Usuario Correto")
}else{
    console.log("usuario Errado")
}

// if encadeado / aninhado

// let idade =15

// if(idade <= 15){
//     console.log("Menor de idade")
// }else if(idade >15 && idade < 18){
//     console.log("não é maior mas pode entrar")
// }else{
//     console.log("Pode entrar é maior")
// }

// // switch

// let time ="Corinthians";

// switch(time){
//     case "Corinthians":
//         console.log("Melhor Time")
//         break;
//     case "Sao Paulo":
//         console.log("Não é melhor Time")
//         break;
//     case "Palmeiras":
//         console.log("Não tem mundial")
//         break;
//     default:
//         console.log("nenhuma das opções")
// }

// ternario


let valor = 110;

let resultado = valor == 100 ? "Certo" :"Errado"
console.log(resultado)

//ternario encadeado
let produto ="mouse"
const desconto =true;

const preco= produto == "notebook" ? desconto ? 100 :200 : produto =="mouse" ? 30:100;
console.log(preco)








