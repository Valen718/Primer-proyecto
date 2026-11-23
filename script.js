const cars = [
    {brand: "Vapid", price: 123.2, stock: 123},
    {brand: "Mustang", price: 248, stock: 67},
    {brand: "Zentorno", price: 789.4, stock: 4},
];

const h1 = document.querySelector("h1");

h1.textContent = "Tienda de autos";


const carList = document.querySelector("#car-list");

const item = document.createElement("li")

for(const car of cars){
    if(car.brand === "Vapid"){
        item.textContent = car.brand;
        carList.append(item)
    }
}