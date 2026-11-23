const cars = [
    {brand: "Vapid", price: 123.2, stock: 123},
    {brand: "Mustang", price: 248, stock: 67},
    {brand: "Zentorno", price: 789.4, stock: 4},
];

const h1 = document.querySelector("h1");

h1.textContent = "Tienda de autos";


const carList = document.querySelector("#car-list");

for(const car of cars){
    const item = document.createElement("li");
    item.textContent = `Car: ${car.brand}, Price: ${car.price}`
    carList.append(item)
}