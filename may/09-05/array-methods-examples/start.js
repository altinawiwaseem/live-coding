let products = [
  {
    type: "t-shirt",
    price: 9.99,
    color: "red",
  },
  {
    type: "socks",
    price: 4.99,
    color: "blue",
  },
  {
    type: "jeans",
    price: 44.99,
    color: "black",
  },
  {
    type: "t-shirt",
    price: 14.99,
    color: "green",
  },
  {
    type: "t-shirt",
    price: 22.99,
    color: "blue",
  },
  {
    type: "jeans",
    price: 59.99,
    color: "blue",
  },
  {
    type: "skirt",
    price: 24.99,
    color: "yellow",
  },
  {
    type: "socks",
    price: 14.99,
    color: "yellow",
  },
];



/* Map */

// Capitalize the type of each product
function capitalize (products){
 let productsCapitalized = products.map((n)=> n.type[0].toUpperCase()+n.type.slice(1))

return productsCapitalized
}
console.log(capitalize(products))

// Get an array containing only product types.
// Example: ["T-shirt", "Socks", "Jeans", "T-shirt"]

function onlyType(products){
  let items =[]
  for(let item of products){
    items.push(item.type)
  }
  return items
}
console.log("onlyType",onlyType(products))
// Add a new property to the products describing the product

function description(products){
products.map(n => n.description = `${n.type}, its color is : ${n.color} and cost: ${n.price}`)
 return products
}
console.log("description",description(products))

/* Filter and find */

// Get an array with only yellow products

// Get an array with products that cost more than 15

// Get an array with listing only the types plus color of products that cost more than 15


// Get the first jeans in the products


// Check if there is at least a blue product

// Check if there is at least a pink product


// Check if there are at least 2 blue products


/* Reduce */

// Calculate the total price of products

// Get an array with only product types, but without repetitions

// Get the most expensive product





// Get the cheapest product

// Get the type and color of the cheapest product


