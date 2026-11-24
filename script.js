const cars = [
    {brand: "Vapid", price: 123.2, stock: 123},
    {brand: "Mustang", price: 248, stock: 67},
    {brand: "Zentorno", price: 789.4, stock: 4},
];


const button = document.querySelector("#welcome-button")

button.addEventListener("click", ()=>{
    const h1 = document.querySelector("h1")
    h1.textContent = "Bienvenido a la tienda"
    
})

const carList = document.querySelector("#car-list");

function showCar(carsToShow){
    for(const car of carsToShow){
        const itemLi = document.createElement("li");
        itemLi.textContent = `Car: ${car.brand}, Price: ${car.price}`
        carList.append(itemLi)
    }
}

showCar(cars);