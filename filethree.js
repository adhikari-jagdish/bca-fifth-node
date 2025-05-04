import fetch from "node-fetch";

const fetchUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        const users = await response.json();

        console.log(users);

    } catch (exception) {
        console.log(exception);
    }
}

fetchUsers();

const testingLoops = () => {
    const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

    fruits.forEach((fruit, index) => {
        console.log(`${index} - ${fruit}`);
    });

    const numbers = [5, 4, 7, 9, 10, 28, 90];
    const doubledNumbers = numbers.map(num => num * 2);
    console.log(`The original array is ${numbers}`);
    console.log(`The new array is ${doubledNumbers}`);

    console.log(fruits.sort());
    console.log(numbers.sort(
        (num1, num2) => num2 - num1
    ));

    const age = [12,10,47,89,23];
    const filteredAges = age.filter(num => num >= 23);
    console.log(filteredAges);

    const courses = ["HTML", "CSS", "JS", "HTML", "Node"];
    const course = courses.find(course => course === "HTML");
    console.log(course);

}

testingLoops();

const products = () => {
    const products = [
        { name: "Laptop", price: 5000 },
        { name: "Keyboard", price: 1500 },
        { name: "Mouse", price: 300 },
        { name: "Charger", price: 400 },
        { name: "Headphones", price: 2500 },
    ];

    ///Filter all products with price > 1000
    const filteredProducts = products.filter(productObject => productObject.price > 1000);
    console.log(filteredProducts);

    const sortedProducts = products.sort(
        (product1, product2)=> product1.price - product2.price
    );

    console.log(sortedProducts);

}

products();