function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// const refs = {
//   input: document.querySelector("#controls input"),
//   createBtn: document.querySelector("[data-create]"),
//   destroyBtn: document.querySelector("[data-destroy]"),
//   boxes: document.querySelector("#boxes"),
// };
const refs = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

// * Solve #1 (fast-codding):
// refs.createBtn.addEventListener("click", createBoxes);
// refs.destroyBtn.addEventListener("click", destroyBoxes);

// function createBoxes() {
//   let string = "";
//   for (let i = 0; i < Number(refs.input.value); i += 1) {
//     string += `<div style="
//       width: ${30 + i * 10}px;
//       height: ${30 + i * 10}px;
//       background-color:${getRandomHexColor()}"></div>`;
//   }

//   refs.boxes.insertAdjacentHTML("afterbegin", string);
//   // або:
//   // refs.boxes.innerHTML = string;
// }

// function destroyBoxes() {
//   refs.boxes.innerHTML = "";
//   refs.input.value = "";
// }

// * Solve #2 (more fn for big project):
refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  if (Number(refs.input.value) <= 0) {
    refs.boxes.innerHTML = "";

    alert("Введіть число більше нуля");
    // або:
    // const message = document.createElement("span");
    // message.textContent = "Введіть число більше нуля";
    // refs.boxes.append(message);
    return;
  }

  createBoxes(Number(refs.input.value));
  clearInput();
}

function createBoxes(amount) {
  const elements = createElements(amount);
  createStyles(elements);
  const newElements = elements.map(el => el.outerHTML).join("");
  // або:
  // let newElements = "";
  // elements.forEach(el => (newElements += el.outerHTML));

  refs.boxes.insertAdjacentHTML("afterbegin", newElements);
}

function createElements(amount) {
  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    elements.push(document.createElement("div"));
  }
  return elements;
}

function createStyles(elements) {
  return elements.map((el, idx) => {
    el.style.width = `${30 + idx * 10}px`;
    el.style.height = `${30 + idx * 10}px`;
    el.style.backgroundColor = getRandomHexColor();
    return el;
  });
}

function onDestroyBtnClick() {
  refs.boxes.innerHTML = "";
  clearInput();
}

function clearInput() {
  refs.input.value = "";
}
