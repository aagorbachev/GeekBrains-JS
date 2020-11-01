// 2.Продолжить работу с интернет - магазином:

// В прошлом домашнем задании вы реализовали корзину на базе массивов.Какими объектами можно заменить их элементы ?
//     Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно - ориентированную базу.

// На дополнительный плюс - реализовать класс корзины.Свойство - сама корзина(массив).Методы - подсчет стоимости, добавление товара в корзину.

//

class cart {
    products = []
    totalPrice = 0
    totalQuantity = 0
    countTotalPrice() {
        let current = this.products.reduce((sum, current) => sum + current, 0)
        this.totalPrice = current
        return this.totalPrice
    }
    countTotalQuantity() {
        this.totalQuantity = this.products.length
        return this.totalQuantity
    }
    addToCart(product, quantity) {
        let list = product.buy(quantity)
        if (list === null) {
            console.log("К сожалению, товаров в нужном количестве не имеется в наличии")
        }
        else {
            this.products.push(...list)
            this.countTotalPrice()
            this.countTotalQuantity()
        }
    }
}

class product {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }
    buy(quantity) {
        if (quantity > this.quantity) {
            return null
        }
        else {
            this.quantity = this.quantity - quantity;
            let list = [];
            for (; quantity > 0; quantity--) {
                list.push(this.price)
            }
            return list
        }
    }
}

const TestCart = new cart
console.log(TestCart)
const product1 = new product("Iphone 10", 800, 2)
TestCart.addToCart(product1, 5)

console.log(TestCart)
console.log(product1)

