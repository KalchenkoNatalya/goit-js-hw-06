const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//Напиши скрипт, який для кожного елемента масиву ingredients:

//Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const list = document.querySelector("#ingredients");
console.log(list);


const items = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  console.log(itemEl);
  itemEl.textContent = `${ingredient}`;
  itemEl.classList.add("item");
  return itemEl;
});

list.append(...items);
console.log(list);
