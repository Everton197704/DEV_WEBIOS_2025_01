//  "A" // Caracter
// "Olá // Texto - String"

"Olá IOS"

var texto1 =  "Olá IOS"
// 0 1 2 3 4 5 6
var resultado1 = texto1.charAt(4) //Acessar caracter
console.log (resultado1)
var resultado2 = texto1[1] //Acessar caracter
console.log(resultado2)

var lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

console.log (lorem.length)
// console.log (lorem.length >= 500)

var texto2 = "OLÁ TEC DE TECNOLOGIA"
var texto3 = "ola, meu nome e ia, seu amigo"

// formato 1
var resultado3 = texto2.toLowerCase()
console.log (resultado3)

//  formato 2

console.log(texto3.toUpperCase())

var texto4 = "Mozilla"
//oz
console.log (texto4.substring(1,3))

console.log (texto4.substring(0,8))

var texto5 = "Bem vindo a Microsoft"

let novaMensagem = texto5.replace ("Microsoft" , "IOS")
console.log(novaMensagem)

// RETIRAR ESPAÇOS EM BRANCO

let textarea = '                            Olá Mundo, aprendendo Javascript            '
console.log(textarea.trim())

