let fruits = ['bananas', 'oranges', 'kiwis']

function addItem(array, ...items){
    let fruitsCopy = [...array]
    fruitsCopy.push(...items) 
    return fruitsCopy
}
console.log(addItem(fruits, "apples", "fruits", "banana"))
console.log(fruits)