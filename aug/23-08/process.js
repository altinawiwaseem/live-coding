// console.log(process) // Host Object, provided by NodeJS
// console.log(Math) // Native Object, provided by Javascript

console.log(process.argv) // ["node path", "file path", arguments...]

console.log(Number(process.argv[2]) + Number(process.argv[3]))

const args = process.argv.slice(2); // [ '1', '2' ] Just the arguments. 

// We can use array methods
// We just want to know which of the arguments are bigger than 3
const newArray = args.filter((elem) => {
    if(Number(elem) > 3) {
        return true;
    } else {
        return false;
    }
})
console.log(newArray)