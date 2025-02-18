const inpuNota= document.getElementById("Nota")
const resultado = document.getElementById("Resultado")
const menssage= document.getElementById("message")



function resultadoNotaClick(event) {
    event.preventDefault()
    console.log("Ola Welington")
    console.log(inpuNota.value)




if(inpuNota === ""){
    Message.style.display = "block";
    return false;
}

message.style.display="none";

if(inpuNota.value>= 6){
    resultado.innerHTML = "Aprovado"

} else {
    
    resultado.innerHTML = "Reprovado"

       }

       inpuNota.value =" "
}

