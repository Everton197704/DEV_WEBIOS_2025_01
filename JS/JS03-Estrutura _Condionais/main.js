let atividadeEntregue = true
let DiaFinalEntrega = 19
let mensagemParebens = 'parabens, valeu fera'

    if (atividadeEntregue == true ) {
    console.log (mensagemParebens) //true
    

    if (DiaFinalEntrega <= 13 ){
        console.log ("Entregou a atividade na data, tirou 10!")
    }
    else {
        console.log ("Entregou atividade fora da data prevista e sera retirado  dois pontos da nota final ")
    }
}
    else if(atividadeEntregue == false) { //false
    console.log('Por favor, realizar a atividade!')}

    else { // resposta alternativa
    console.log("você inseriu uma informação invalida")
    }