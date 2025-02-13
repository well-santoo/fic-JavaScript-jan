const names = ["João grilo", "chico", "Roshinha"]

let templateNames = '';

for(let i = 0; i< names.length; i++){
    templateNames += `<li>${names[i]}</li> `;
}
console.log(templateNames)