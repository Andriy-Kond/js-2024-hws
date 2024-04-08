const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Напиши скрипт для створення галереї зображень на підставі масиву даних.
// HTML містить список ul.gallery: <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

//* Solve #01:
// const list = document.querySelector(".gallery");

// const items = [];
// list.style.display = "flex";
// list.style.flexDirection = "column";
// list.style.gap = "40px";

// images.forEach(el => {
//   const item = document.createElement("li");
//   const img = document.createElement("img");
//   img.setAttribute("url", el.url);
//   img.setAttribute("alt", el.alt);
//   item.append(img);
//   console.log("item:::", item);
//   items.push(item);
// });

// list.append(...items);

// * Solve #02:
const list = document.querySelector(".gallery");
list.classList.add("task03Styles");

const markup = images.map(el => `<li><img src="${el.url}" alt="${el.alt}"></li>`).join("");

list.insertAdjacentHTML("afterbegin", markup);
