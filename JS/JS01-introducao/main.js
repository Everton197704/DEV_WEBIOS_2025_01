var idade
// javascript
console.log("Hello world") //Apresentar uma mensagem

console.clear() //limpar a tela
// Variaveis

var numero1 = 192 //inicializar uma variavel
console.log(numero1)

var num1 = 4
var num2 = 4

var resultado = num1 + num2
console.log (num1 + num2)

idade = 89 // inicia a variavel em outra parte do codigo
console.log (idade)

// textos - strings
var nome =' Matheus Araujo '
var nome2 =' Matheus vinicius '
var nome3 ='221321321' //texto

console.log (nome) 
console.log (nome2)
console.log (nome3)

console.log ("Olá" + "Papai") //Concatenar
console.log ("Aluno " + nome +  " e Aluno " + nome2 + "tem um total de " + nome3 +" dinheiros") 

// template strings

console.log(`aluno ${nome} e aluno ${nome2} tem um total de ${nome3} dinheiros` )  
//concatenar 3 

console.log (10)

// operadores Aritmeticos

var valor1 = 5 
var valor2 = 5 
console.log (valor1 + valor2)
console.log (valor1 - valor2)
console.log (valor1 * valor2)
console.log (valor1 / valor2)
console.log (valor1 ** valor2)

//operadores relacionais

console.log ( 5 == 5)
console.log ( 5 === "5")
console.log ( 5 > 5)
console.log ( 5 >= 5)
console.log ( 22 < 8 )
console.log ( 22 !== "22" )
console.log ( "ana" ==  "ana")

// operadores logicos

let TemCamisa = false
let TemCracha = true
console.log (TemCamisa)
console.log (TemCracha)
console.log (TemCamisa == true && TemCracha == true)  // false == true = false
console.log (TemCamisa == true || TemCracha == true)  // false ou true = true


// operador de atribuição
var x = 3
var y = 2
// var soma = x + y
// x = soma

x = x + y
//  x  += y formato contrario
//  x = 3 + 2
console.log (x)

x + 720
console.log (x)

//Log  = é para mostrar resultados, mensagens do sistema
// clear = Limpar o console  e deixar disponivel para novasmensagens
console.clear ()

console.log ("Está tudo limpo")
console.log ("Olá mundo!")

console.error("Não use essa tela, você pode ser punido por isso")
console.warn("Mas apresenta uma mensagem em amarelo")