// Задание 4
// Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
// В конце второго урока вы сказали, что это задание должно быть выполнено с помощью оператора switch и что пользователю должна отобразиться последовательность чисел от 0 до введенного им числа (но в пределах диапазона от 0 до 15) Например, пользователь вводит число 5 и он должен увидеть отсчет от 0 до 5. Это противоречит написанному в самом задании.
// С помощью оператора switch я такой код вывести не смог. Если следовать букве написанного в задании, то код будет выглядеть так:

let userNumber = +prompt("Введите любое целое число от 0 до 15");

switch (userNumber) {
  case 0:
    console.log(userNumber);
    userNumber++;
  case 1:
    console.log(userNumber);
    userNumber++;
  case 2:
    console.log(userNumber);
    userNumber++;
  case 3:
    console.log(userNumber);
    userNumber++;
  case 4:
    console.log(userNumber);
    userNumber++;
  case 5:
    console.log(userNumber);
    userNumber++;
  case 6:
    console.log(userNumber);
    userNumber++;
  case 7:
    console.log(userNumber);
    userNumber++;
  case 8:
    console.log(userNumber);
    userNumber++;
  case 9:
    console.log(userNumber);
    userNumber++;
  case 10:
    console.log(userNumber);
    userNumber++;
  case 11:
    console.log(userNumber);
    userNumber++;
  case 12:
    console.log(userNumber);
    userNumber++;
  case 13:
    console.log(userNumber);
    userNumber++;
  case 14:
    console.log(userNumber);
    userNumber++;
  case 15:
    console.log(userNumber);
    break;
  default:
    console.log("Вы ввели неправильное число!");
    break;
}

// Если следовать сказанному в конце урока, то так будет выглядеть решение с помощью цикла for:

// if (userNumber > 15 || userNumber < 0 || isNaN(userNumber)) {
//   console.log("Вы ввели неправильные данные");
// } else {
//   for (i = 0; userNumber >= i && i < 16; i++) {
//     console.log(i);
//   }
// }
