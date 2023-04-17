// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const categoriesEl = document.querySelectorAll("li.item");
console.log(categoriesEl);

const numberCategories = `Number of categories: ${categoriesEl.length}`;
console.log(numberCategories);

// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку
// елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

categoriesEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
