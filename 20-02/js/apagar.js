const apagarBtn = document.getElementById("apagar")

apagarBtn.addEventListener("click", function(){
    localStorage.clear()

    listaValores.innerHTML = "";
})