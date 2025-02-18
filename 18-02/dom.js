const nome = document.getElementById("Nome")
const cidade = document.getElementById("cidade")
const email = document.getElementById("Email")

const titulo =document.getElementById("titulo")
const subtitulo =document.getElementById("subtitulos")
const txtemail = document.getElementById("email")




function mudar (event) {
    event.preventDefault();
    console.log(nome.value);

    titulo.innerHTML =nome.value;
    subtitulo.innerHTML=subtitulo.value
    txtemail.innerHTML = txtemail.value

}