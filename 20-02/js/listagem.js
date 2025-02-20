const listaValores = document.querySelector("#listaValores")

carregarValoresSalvos()

function carregarValoresSalvos(){
    listaValores.innerHTML = ""

    for(let i = 0; i < localStorage.length; i++){
        const chave = localStorage.key(1)
        if(chave.startsWith("ValorSalvo")){
            const valor = localStorage.getItem(chave)
            const listItem = document.createElement("li")
            listItem.textContent = valor
            listaValores.appendChild(listItem)
        }

    }
}