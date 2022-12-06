// 1. Write a function name greeting and console.log("Hello world!")

function greeting() {
    console.log("Hello World!");
}

greeting();

// 2. Write a function name greeting, which contains a parameter called name then console.log("Hi" + name)

function greeting_(name) {
    console.log("Hi " + name)
}

greeting_("John");

// 3. Write a function to calculate the sum of two numbers

function sum(a, b) {
    sum=a+b;
    return sum;
}

console.log(sum(5, 8));

// 4. Write a function to double value of number

function doubleValue(a) {
    return a * 2;
  }
console.log(doubleValue(7));

let numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 5. Filter method
// Return a new array that contains number bigger than 3

let checkNumbersBiggerThan3 = numbersList.filter( item => item > 3);
console.log(checkNumbersBiggerThan3);

// Return a new array that contains number less than 7

let checkNumbersLessThan7 = numbersList.filter( item => item < 7);
console.log(checkNumbersLessThan7);

// Return new array that contains even number

const evenNumbers = numbersList.filter(number => {
    return number % 2 === 0;
});

console.log(evenNumbers);

// Return new array that contains odd number

const oddNumbers = numbersList.filter(number => {
    return number % 2 !== 0;
});

console.log(oddNumbers);

// 6. forEach
// Using forEach to console.log the element in the array

numbersList.forEach(element => console.log(element));

// Using forEach to console.log the element with its index in the array

numbersList.forEach( (element, index) => console.log(element, index));

// 7. Map method
// Using map() to square each number in the array

numbersList.map( element => console.log(element*element));

// Using map() to return a new array with double value of each element in the array

numbersList.map( element => console.log (element*2));

// 8. Extra task
const vegetables = ["garlic", "carrot", "broccoli", "pumpkin"];
// 1. Sort the array in alphabetically

console.log(vegetables.sort());

// 2. What is the length of the array

const length = vegetables.length;
console.log(length);

// 3. Write a function called myVeggieList to console.log() the length of the array

function myVeggieList () {
    console.log(vegetables.length)
}

myVeggieList();

// 4. Push one more item to the array called "onion"

vegetables.push("onion");

// 5. Write a function using if-else condition to check if the length of the array is bigger than 4.

function checkSizeOfArray(array) {
    if(array.length > 4) {
        console.log("The length of vegetables array is bigger than 4 and equals - " + array.length);
    }
    else {
        console.log("The length of vegetables array is NOT bigger than 4 and equals - " + array.length);
    }
}

checkSizeOfArray(vegetables);

// 6. Using forEach or map to loop and console.log() the item in the array

vegetables.forEach( vegetable => console.log(vegetable));