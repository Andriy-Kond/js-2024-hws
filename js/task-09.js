function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const refs = {
  body: document.querySelector("body"),
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

refs.button.addEventListener("click", () => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.span.textContent = color;
});
