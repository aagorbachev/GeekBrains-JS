// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

// let arr = [1, 2, 3, 4, 5];

//let result = arr.reduce((sum, current) => sum + current, 0);



let basket = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function countBasketPrice(basket) {
  let sum = 0;
  for (let price of basket) {
    sum = sum + price;
  }
  return sum;
}

console.log(countBasketPrice(basket));
