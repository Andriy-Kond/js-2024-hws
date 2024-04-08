// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const input = document.querySelector("#name-input");
const header = document.querySelector("#name-output");

input.addEventListener("input", e => {
  header.textContent = e.currentTarget.value;
  if (!header.textContent) {
    header.textContent = "Anonymus";
  }
});
