const inpuNota= document.getElementById("Nota")
const resultado = document.getElementById("Resultado")




function resultadoNotaClick(event) {
    event.preventDefault()
    console.log("Ola Welington")
    console.log(inpuNota.value)


if(inpuNota.value>= 6){
    resultado.innerHTML = "Aprovado"

} else {
    
    resultado.innerHTML = "Reprovado"

       }

       inpuNota.value =" "
}

