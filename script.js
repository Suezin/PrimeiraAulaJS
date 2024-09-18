//Exercício 1 :
let nome = "Matheus Farias"
console.log(nome);

//Exercício 2 :
var minhaIdade = 16;
var idadeAmigo = 17;
console.log("A diferença entre as idade é de "+ (idadeAmigo - minhaIdade) + " anos");

//Exercício 3 :
var numInt = 10;
var numDec = 9.9;
console.log("A soma é de : " + ( numInt + numDec));

//Exercício 4 :
var email = "matheus@gmail.com";
if(email.includes("@")){
    console.log("Email válido");
}else {
    console.log("Email inválido");
}

// Exercício 5 :
var array = ["Azul","Roxo","Preto"];
console.log(array);

//Exercício 6 :
var num = 30;
if(num % 3 == 0 && num % 5 == 0 ){
    console.log("Divisível por 3 e 5");
}else {
    console.log("Não divisível por 3 e 5")
}

//Exercício 7 :
var num1 = 2.1;
var num2 = 2;
if(num1 > num2){
    console.log("O primeiro número é maior");
}else if(num2 > num1){
    console.log("O segundo número é maior");
}else {
    console.log("Ambos os números são iguais");
}

//Exercício 8 : 
var chovendo = false;
var ventando = true;
if(chovendo || ventando == true){
    console.log("Vou levar guarda-chuva");
}else {
    console.log("Não preciso de guarda-chuva");
}

//Exercício 9 :
var num = 0;
if(num > 0){
    console.log("O número é positivo")
}else if(num < 0 ){
    console.log("O número é negativo");
}else {
    console.log("O número é igual a zero");
}
//Exercício 10 :
var num1 = -19;
if(num1 % 2 == 0 ){
        console.log("O número é Par")
}else {
        console.log("O número é Ímpar")
}
