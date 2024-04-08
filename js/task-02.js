const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// * Solve:
const list = document.querySelector("#ingredients");
const items = [];

ingredients.forEach(el => {
  const item = document.createElement("li");
  item.textContent = el;
  item.classList = "item";

  items.push(item);
});

list.append(...items);
