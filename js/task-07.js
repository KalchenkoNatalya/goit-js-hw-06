//Завдання 7
//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const runner = document.querySelector("#font-size-control")
const textSpan = document.querySelector("#text")


runner.addEventListener("input", handleInputRunner)

function handleInputRunner (event) {     
textSpan.style.fontSize = `${runner.value}px`
}

