const numbers = [];
let total = 0;
let input;

while (true) {
  input = prompt("Введите число");

  if (input === null) {
    break;
  } else {
    numbers.push(Number(input));
  }
}

for (const number of numbers) {
  total += number;
}
console.log(`Общая сумма чисел равна ${total}`);
