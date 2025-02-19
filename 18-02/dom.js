const nome = document.getElementById("nome")
const cidade = document.getElementById("cidade")
const email = document.getElementById("email")

const titulo = document.getElementById("titulo")
const subtitulo = document.getElementById("subtitulos")
const txtemail = document.getElementById("email")




function mudar(event) {
    event.preventDefault()

    if (nome.value === "" || cidade.value === "" || email.value === "") {
        alert("Preencha o campo")
        return false
    }

    titulo.innerHTML = nome.value;
    subtitulo.innerHTML = subtitulo.value
    txtemail.innerHTML = txtemail.value

    titulo.value = ""
    subtitulo.value = ""
    txtemail.value = ""

}

function mudarCor() {

if(document.body.style.backgroundColor === "red";){
    document.body.style.backgroundColor ="";

}else {
    document.style.backgroundColor = "red"
}
    document.body.style.backgroundColor = "red";
   //document.body.style.backgroundColor = "red"
}
