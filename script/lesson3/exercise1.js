// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

// 1. Сгенерировать число, которое будет больше 1 и меньше 100
// 2. Проверить, является ли оно составным
// 3. Составное число - целое число, у которого больше двух делителей (проверка при делении на isInteger)

let number = 1;
let arr = [];

function isSimpleNumber(value) {
  let result;
  let divider = 2;
  if (value === 1) {
    return false;
  } else if (value === 2 || value === 3) {
    return true;
  } else {
    while (divider < value) {
      result = value / divider;
      if (Number.isInteger(result)) {
        return false;
      } else {
        divider++;
      }
    }
    return true;
  }
}

while (number <= 100) {
  if (isSimpleNumber(number)) {
    arr.push(number);
    number++;
  } else {
    number++;
  }
}

console.log(arr);
