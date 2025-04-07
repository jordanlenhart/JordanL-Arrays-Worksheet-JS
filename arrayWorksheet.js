// Part 1: Understanding Basic of Arrays
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]);
console.log(fruits.length);


// Part 2: Adding and Removing Elements
fruits[fruits.length] = "orange";
console.log(fruits);

let removedFruit = fruits.pop();
console.log(fruits);
console.log(removedFruit);

fruits.push("mango", "pineapple");
fruits.pop();
console.log(fruits);
console.log(fruits.length);


// Part 3: Looping Through Arrays
for (fruit = 0; fruit < fruits.length; fruit++) {
    console.log(fruits[fruit])
}

for (fruit = 0; fruit < fruits.length; fruit++) {
    console.log(fruits[fruit].toUpperCase())
}

let appleCount = 0;
for (fruit = 0; fruit < fruits.length; fruit++) {
    if(fruits[fruit] === "apple"){
        appleCount++;
    }
}
console.log(appleCount)


// Part 4: Hands-On Practice
let cart = [];
cart.push("item1", "item2", "item3");
console.log(cart);
cart.pop()
console.log(cart, cart.length);

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

let numbersReverse = [];
for (number =  numbers.length - 1; number >= 0; number--) {
    let numberIndex = numbers[number];
    numbersReverse.push(numberIndex);
}
console.log(numbersReverse);


// Part 5: Conditional Statements with Arrays
let array1 = ["a", "b", "c", "d"];
let array2 = ["red", "green", "blue"];

if (array1.length > array2.length) {
    console.log("array1")
} else {
    console.log("array2");
}


// Part 6: Print Even Indexed Elements
const array = [10, 20, 30, 40, 50, 60];

let evenArray = [];
for (let evenNum = 0; evenNum < array.length; evenNum += 2) {
    evenArray.push(array[evenNum]);
}
console.log(evenArray);

// Part 7: Push Challenge: Nested Loops
let students = ["Alice", "Bob", "Charlie"];
let subjects = ["Math", "Science"];
let studentSubjectList = [];

for (let student of students) {
    for (let subject of subjects) {
        studentSubjectList.push(student + " - " + subject)
    }
}
console.log(studentSubjectList);
// A nested loop is a loop within a loop. For each iteration of the "outer" or "parent" loop, the "inner" or "child" loop will be executed/performed.