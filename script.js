const cars = [
    {brand: "Vapid", price: 123.2, stock: 123},
    {brand: "Mustang", price: 248, stock: 67},
    {brand: "Zentorno", price: 789.4, stock: 4},
];

const carsInStock = cars.filter(car => car.stock > 10);

console.log("Autos con stock mayor a 10:\n")
for(const car of carsInStock){
    console.log(car.brand, ",", car.price)
}