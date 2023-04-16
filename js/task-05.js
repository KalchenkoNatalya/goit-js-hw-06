// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input
// (подія input), підставляє його поточне значення в span#name-output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputForm = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputForm.addEventListener("input", (event) => {
  outputText.textContent = event.currentTarget.value.trim();
  if (!event.currentTarget.value) {
    outputText.textContent = "Anonimus";
  }
});
