const cars =  [
    {
    brand: "Toyota",
    model: "Corola",
    year: 2022
    },
    {
        brand: "Honda",
        model: "Civic",
        year: 2008
    },
    {
        brand: "Fit",
        model: "uno",
        year: 2013
    },
    {
        brand: "Hyundai",
        model: "HB20",
        year: 2023
    },
    {
        brand: "Nissan",
        model: "march",
        year: 2011
    },
    {
        brand: "Fiat",
        model: "Palio",
        year: 1995
    },
];

function displayCard(){
    const cardlist = document.querySelector("#card-list")

    cars.forEach((car) => {
        

        const carDiv = document.createElement("div")
        carDiv.classList.add('car')

        const carModel = document.createElement("h2")
        carModel.textContent =`${car.brand} ${car.model}`

        const year = document.createElement("p")
        year.textContent = `${car.year} `


        
        carDiv.appendChild(carModel)
        carDiv.appendChild(year)
        cardlist.appendChild(carDiv)


    })

}

displayCard()
