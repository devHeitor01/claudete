//crianddo a função
function validarNumero(){

//criando variáveis
    let numero = document.getElementById("numero").value
    let mensagem = document.getElementById("mensagem");

//desvio condicional encadeado/aninhado
    if(numero === ""){
        mensagem.textContent = "Por favor, insira um numero"
        mensagem.style.color = "red"
    }
    //converter texto para numero
    numero= parseInt(numero)

    if(numero >= 10){
        mensagem.textContent ="O número é maior ou igual a 10"
        mensagem.style.color = "green"
    }
    else{
        if(numero > 5){
            mensagem.textContent = "O número é maior que 5, mas menor quue 10"
            mensagem.style.color = "orange"
        }
        else{
            mensagem.textContent = "O número é 5 ou menor"
            mensagem.style.color = "blue"
        }
    }
}
