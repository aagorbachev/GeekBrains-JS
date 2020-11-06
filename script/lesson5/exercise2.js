// 2. Делаем корзину. Есть массив с товарами. Делаем блок с корзиной. Выводим каждый товар в этом блоке. Под списком товаров выводим их цену.
// Список (html) формируем динамически, как это делали с меню на занятии.

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
    constructor(name, price, quantity, image) {
        this.name = name
        this.price = price
        this.quantity = quantity
        this.image = image
    }
    buy(quantity) {
        if (quantity > this.quantity) {
            return null
        }
        else {
            this.quantity = this.quantity - quantity;
            let list = [];
            for (; quantity > 0; quantity--) {
                let boughtProduct = {}
                list.push(this.price)
            }
            return list
        }
    }
}

let cartContainer = document.createElement('div')
cartContainer.classList.add('cart-container')

let shoppingList = document.createElement('div')
shoppingList.classList.add('cart_list')

let product1 = new product('t-shirt', 5, 100, 'n/a')
let product2 = new product('cargo', 20, 50, 'n/a')
let product3 = new product('hoodie', 17, 20, 'n/a')
let product4 = new product('jeans', 30, 40, 'n/a')
let product5 = new product('pullover', 25, 30, 'n/a')

let mainCart = new cart

mainCart.addToCart(product1, 5)
mainCart.addToCart(product2, 10)
mainCart.addToCart(product3, 15)
mainCart.addToCart(product4, 10)
mainCart.addToCart(product5, 20)

mainCart.products.forEach(product => {
    let cartItem = document.createElement('div')
    cartItem.classList.add('cart_item')

    let cartItemImage = document.createElement('img')
    cartItemImage.classList.add('cart_item-image')
    cartItemImage.setAttribute('src', `images/${product.name}.jpg`)

    let cartItemQuantity = document.createElement('div')
    cartItemQuantity.classList.add('cart_item-quantity')
    cartItemQuantity.innerText(`${product.}`)
})

//ToDo: переделать метод buy у класса product: он должен передавать в корзину объект-товар с тремя свойствами - названием, ценой и количеством


