let fruits = ["bananas", "oranges", "kiwis"];

function addItem(array, ...items) {
  let fruitsCopy = [...array];
  fruitsCopy.push(...items);
  return fruitsCopy;
}
console.log(addItem(fruits, "apples", "fruits", "banana"));
console.log(fruits);

// task 2 a
console.log("\n task 2 \n");
const recipe = {
  idMeal: "52818",
  strMeal: "Chicken Fajita Mac and Cheese",
  strDrinkAlternate: null,
  strCategory: "Chicken",
  strArea: "American",
  strInstructions:
    "Fry your onion, peppers and garlic in olive oil until nicely translucent. Make a well in your veg and add your chicken. Add your seasoning and salt. Allow to colour slightly.\r\nAdd your cream, stock and macaroni.\r\nCook on low for 20 minutes. Add your cheeses, stir to combine.\r\nTop with roasted peppers and parsley.",
  strMealThumb:
    "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",
  strTags: "Pasta,Cheasy,Meat",
  strYoutube: "https://www.youtube.com/watch?v=bwTSmLTZKNg",
  strIngredient1: "macaroni",
  strIngredient2: "chicken stock",
  strIngredient3: "heavy cream",
  strIngredient4: "fajita seasoning",
  strIngredient5: "salt",
  strIngredient6: "chicken breast",
  strIngredient7: "olive oil",
  strIngredient8: "onion",
  strIngredient9: "red pepper",
  strIngredient10: "garlic",
  strIngredient11: "cheddar cheese",
  strIngredient12: "parsley",
  strIngredient13: "",
  strIngredient14: "",
  strIngredient15: "",
  strIngredient16: "",
  strIngredient17: "",
  strIngredient18: "",
  strIngredient19: "",
  strIngredient20: "",
  strMeasure1: "500g",
  strMeasure2: "2 cups",
  strMeasure3: "1/2 cup",
  strMeasure4: "1 packet",
  strMeasure5: "1 tsp",
  strMeasure6: "3 diced",
  strMeasure7: "2 tbsp",
  strMeasure8: "1 small finely diced",
  strMeasure9: "2 finely diced",
  strMeasure10: "2 cloves minced",
  strMeasure11: "1 cup",
  strMeasure12: "garnish chopped",
  strMeasure13: "",
  strMeasure14: "",
  strMeasure15: "",
  strMeasure16: "",
  strMeasure17: "",
  strMeasure18: "",
  strMeasure19: "",
  strMeasure20: "",
  strSource: "http://twistedfood.co.uk/chicken-fajita-mac-n-cheese/",
  strImageSource: null,
  strCreativeCommonsConfirmed: null,
  dateModified: null,
};
function ingredientsArray(obj) {
  let array = [];
  let entries = Object.entries(obj);
  for (let i = 0; i < entries.length; i++) {
    let keys = entries[i][0];
    let values = entries[i][1];
    if (keys.includes("strIngredient") && values) array.push(values);
  }
  return array;
}
let ingredients = ingredientsArray(recipe)
console.log(ingredients);

// b

console.log("\n b \n")

function strMeasureArray(obj) {
    let array = [];
    let entries = Object.entries(obj);
    for (let i = 0; i < entries.length; i++) {
      let keys = entries[i][0];
      let values = entries[i][1];
      if (keys.includes("strMeasure") && values) array.push(values);
    }
    return array;
  }
  let quantities = strMeasureArray(recipe)
  console.log(quantities);

  // c
  console.log("\n C \n")

  function measureIngredients(quan, ingr){
    let recipe = []
    for (let i = 0; i < quan.length; i++){
        recipe.push(quan[i],ingr[i])
    }
    return recipe

  }

  console.log(measureIngredients(quantities,ingredients))

  // task 4 
  console.log("\n 4 \n")

  