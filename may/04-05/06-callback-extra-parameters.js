let numbers = [1, 2, 3, 4, 5];

function double(n) {
    return n * 2;
}

// function triple(n, index, array) {
//     console.log("multiplier", multiplier);
//     return n * multiplier;
// }

// console.log(numbers.map(double));
// console.log(numbers.map(triple));

function multiplyArrayBy(array, multiplier) {
    let result = array.map((n) => n * multiplier);
    return result;
}

console.log(multiplyArrayBy(numbers, 2));
console.log(multiplyArrayBy(numbers, 3));
console.log(multiplyArrayBy(numbers, 4));



let mapResult = numbers.map((n) => n / 2);
console.log(mapResult);