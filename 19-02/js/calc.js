const valor1 = document.getElementById("valor1")
const valor2 = document.getElementById("valor2")

const resultado = document.getElementById("resultado")

function somar(event){
    event.preventDefault();
    
    let resultadoSoma = Number(valor1.value) + Number(valor2.value);
    resultado.innerHTML = resultadoSoma;
}

function subtracao(event){
    event.preventDefault();
    
    let resultadoSub = Number(valor1.value) - Number(valor2.value);
    resultado.innerHTML = resultadoSub;
}

function multi(event){
    event.preventDefault();
    
    let resultadoSub = Number(valor1.value) * Number(valor2.value);
    resultado.innerHTML = resultadoSub;
}

