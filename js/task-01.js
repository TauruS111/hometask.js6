const categoriesRef = document.querySelector('#categories');
const itemCategories = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesRef.children.length);
itemCategories.forEach(category => {
    console.log('Category:', category.querySelector('h2').textContent);  
    console.log('Elements:',category.querySelector('ul').children.length); 
});