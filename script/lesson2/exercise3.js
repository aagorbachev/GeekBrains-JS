//Задание 3
// Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

function randomInt() {
  return Math.floor(Math.random() * 10 * ((Math.random() - 0.5) * 2));
}

let a = randomInt();
let b = randomInt();

console.log("Первое число равно " + a);
console.log("Второе число равно " + b);

if (a >= 0 && b >= 0) {
  console.log(a - b);
} else if (a < 0 && b < 0) {
  console.log(a * b);
} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
  console.log(a + b);
}