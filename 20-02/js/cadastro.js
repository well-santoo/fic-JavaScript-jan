const campo = document.querySelector("#campo")
const salvarBtn = document.querySelector("#salvar")

salvarBtn.addEventListener("click", function() {
    const valor = campo.value;
    

    const chave = `ValorSalvo_${Date.now()}`;
    
    localStorage.setItem(chave, valor);
    

    campo.value = ""
});