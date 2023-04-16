//Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

//<div id="counter">
//<button type="button" data-action="decrement">-1</button>
//<span id="value">0</span>
//<button type="button" data-action="increment">+1</button>
//</div>

//Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.
const value = document.querySelector("#value");
const btnIncrement = document.querySelector(' button[data-action="increment"]');
const btnDecrement = document.querySelector(' button[data-action="decrement"]');

const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
  },
  decrement() {
    this.counterValue -= 1;
  },
};

btnIncrement.addEventListener("click", () => {
  // console.log("click+1");
  counter.increment();
  value.textContent = counter.counterValue;
});

btnDecrement.addEventListener("click", () => {
  // console.log("click-1");
  counter.decrement();
  value.textContent = counter.counterValue;
});

// let counterValue = 0;
// function increment() {
//   counterValue += 1;
// }
// function decrement() {
//   counterValue -= 1;
// }

// btnIncrement.addEventListener("click", () => {
//   console.log("click+1");
//   increment();
//   value.textContent = counterValue;
// });

// btnDecrement.addEventListener("click", () => {
//   console.log("click-1");
//   decrement();
//   value.textContent = counterValue;
// });
