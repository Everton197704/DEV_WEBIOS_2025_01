// window.alert("Olá mundo")
// window.prompt("Digite um numero de 1 a 10")
// window.setTimeout(mensagem, 5000)
// 2s > 2500
// (Nome de funcao, tempo para chama a funcao)
//Function > Ações que o codigo pode executar quando for solicitado pelo usuario no navegador
function mensagem () {
    alert("Aprendendo DOM com 35")
    alert(Date())
}





let tagH1 = document.createElement("h1")
//innerHTML > Para adicionar uma informação dentro das tags do HTML
tagH1.innerHTML = 'Olá mundo. criei você'
//A quem ela vai pertencer
document.body.appendChild(tagH1)