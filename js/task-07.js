// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
// span.style.fontSize = "16px";

input.addEventListener("input", e => {
  const newTextSize = e.currentTarget.value - 40;
  // console.log("e.currentTarget.value:::", e.currentTarget.value);
  // console.log("newTextSize:::", newTextSize);
  span.style.fontSize = `${newTextSize}px`;
});
