const cars = [
    {brand: "Vapid", price: 123.2, stock: 123},
    {brand: "Mustang", price: 248, stock: 67},
    {brand: "Zentorno", price: 789.4, stock: 4},
];


const button = document.querySelector("#welcome-button")
const h1 = document.querySelector("h1")

button.addEventListener("click", ()=>{
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


const filter = document.querySelector("#filter-button")

filter.addEventListener("click", ()=>{
    carList.textContent = ""
    h1.textContent = "Autos filtrados con stock mayor a 10"
    const filt = cars.filter(car => car.stock > 10)
    showCar(filt)
})