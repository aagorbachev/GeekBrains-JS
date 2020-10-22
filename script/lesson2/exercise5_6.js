// Задание 5
// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

// Сложение
function addition(a, b) {
  return a + b;
}

// Вычитание
function subtraction(a, b) {
  return a - b;
}

// Умножение
function multiplication(a, b) {
  return a * b;
}

// Деление
function division(a, b) {
  return a / b;
}

// Задание 6
// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции
// выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "+":
      result = addition(arg1, arg2);
      break;
    case "-":
      result = subtraction(arg1, arg2);
      break;
    case "*":
      result = multiplication(arg1, arg2);
      break;
    case "/":
      result = division(arg1, arg2);
      break;
  }
  return result;
}

console.log(mathOperation(5, 5, "+"));
console.log(mathOperation(5, 5, "-"));
console.log(mathOperation(5, 5, "*"));
console.log(mathOperation(5, 5, "/"));
