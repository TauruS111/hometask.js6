const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsBox = document.querySelector('#ingredients');

function getIngredients(ingredientsData) {
 return ingredientsData.map(item => {
    const listItem = document.createElement('li');
   listItem.textContent = item;
   return listItem;
  })
}
ingredientsBox.append(...getIngredients(ingredients)); 
