// Função para gerar um número aleatório
function sorteiaNumero(min, max) {
    return parseInt(Math.random() * max) + min
}

// Ele está pegando o elemento que tem o id = resposta
var divResposta = document.getElementById("resposta")
var divContador = document.getElementById("contador")
var numero_sorteado = sorteiaNumero(1, 100)
var contador = 0

console.log(numero_sorteado);

// Função que verifica o número 
function verificaNumero(chute, numero_sorteado) {

    // innerHTML - ele insere um conteúdo na página HTML
    divResposta.innerHTML = "";

    if (chute < numero_sorteado) {
        return divResposta.innerHTML += `
            <p>Você errou! O número é maior que ${chute}.<p>
        `
    }
    else if (chute > numero_sorteado) {
        return divResposta.innerHTML += `
            <p>Você errou! O número é menor que ${chute}.<p>
        `
    }
    else if (chute == numero_sorteado) {
        return divResposta.innerHTML += `
            <p>Você acertou! O número era ${numero_sorteado}<p>
        `
    }
}

// Para representar lista a gente utiliza colchetes - []
var listaDeJogadores = []

// Função de jogo
function enter() {

    var chute = document.getElementById("chute").value
    contador++

    while (contador <= 5 && chute != numero_sorteado) {
        // Aqui eu to chamando a função de verificar o número
        verificaNumero(chute, numero_sorteado)

        divContador.innerHTML = ""

        divContador.innerHTML += `
            <p>Quantidade de chutes: ${contador}</p>
        `

        document.getElementById("chute").value = ""

        return false
    }

    divResposta.innerHTML = ""
    divTabela.innerHTML = ""
    let nome = document.getElementById("nome").value

    if(chute != numero_sorteado){
        divResposta.innerHTML += `
            <p>Você perdeu! O número era ${numero_sorteado}</p>
        `
    }else{
        listaDeJogadores.push({ nome, contador })

        for(let i = 0; i < listaDeJogadores.length; i++){
            divTabela.innerHTML += `
                <table>
                    <tbody>
                        <tr>
                            <th>${listaDeJogadores[i].nome}</th>
                            <th>${listaDeJogadores[i].contador}</th>
                        </tr>
                    </tbody>
                </table>
            `
        }
    }

    

    return false
}