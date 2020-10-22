// Задание 7
// Сравнить null и 0. Попробуйте объяснить результат.

// В сравнениях ниже срабатывает приведение типов. Null преобразуется в 0.
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true

// В этом сравнении срабатывает иной алгоритм сравнения, при котором null не преобразуется в иной тип.
console.log(null == 0); // false

// Задание 8
// *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
  if (pow < 2) {
    return val;
  } else {
    return val * power(val, pow - 1);
  }
}

let val = +prompt("Введите целое число");
let pow = +prompt("Введите степень числа");

console.log(`Число ${val} в степени ${pow} равно ${power(val, pow)}`);
