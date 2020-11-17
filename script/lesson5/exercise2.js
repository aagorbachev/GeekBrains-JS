// 2. Делаем корзину. Есть массив с товарами. Делаем блок с корзиной. Выводим каждый товар в этом блоке. Под списком товаров выводим их цену.
// Список (html) формируем динамически, как это делали с меню на занятии.

class Cart {
  products = [];
  amount = 0;
  quantity = 0;
  _couponValue = "renoshop";
  _giftVouvcher = "gift";
  countTotalAmount() {
    this.amount = this.products.reduce(
      (total, currentValue) => total + currentValue.amount,
      0
    );
    return this.amount;
  }
  countTotalQuantity() {
    this.quantity = this.products.length;
    return this.quantity;
  }
  addToCart(product, quantity) {
    let list = product.buy(quantity);
    if (list === null) {
      console.log(
        "К сожалению, товаров в нужном количестве не имеется в наличии"
      );
    } else {
      this.products.push(list);
      this.countTotalAmount();
      this.countTotalQuantity();
    }
  }
  setCouponValue(value) {
    this._couponValue = value;
  }
  getCouponValue() {
    return this._couponValue;
  }
  setGiftVoucher(value) {
    this._giftVouvcher = value;
  }
  getGiftVoucher() {
    return this._giftVouvcher;
  }
}

class Product {
  constructor(name, price, quantity, imageLink) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.image = imageLink;
  }
  buy(quantity) {
    if (quantity > this.quantity) {
      return null;
    } else {
      this.quantity = this.quantity - quantity;
      let boughtProducts = {};
      boughtProducts.name = this.name;
      boughtProducts.price = this.price;
      boughtProducts.quantity = quantity;
      boughtProducts.amount = boughtProducts.quantity * boughtProducts.price;
      boughtProducts.image = this.image;
      return boughtProducts;
    }
  }
}

const product1 = new Product("Футболка", 5, 100, "t-shirt");
const product2 = new Product("Брюки карго", 20, 50, "cargo");
const product3 = new Product("Мужское худи", 17, 20, "hoodie");
const product4 = new Product("Джинсы", 30, 40, "jeans");
const product5 = new Product("Женский пуловер", 25, 30, "pullover");

const mainCart = new Cart();

mainCart.addToCart(product1, 5);
mainCart.addToCart(product2, 10);
mainCart.addToCart(product3, 15);
mainCart.addToCart(product4, 20);
mainCart.addToCart(product5, 20);

const cartContainer = document.createElement("div");
cartContainer.classList.add("cart-container");
document.body.append(cartContainer);

const cartTitles = document.createElement("div");
cartTitles.classList.add("cart-titles");

let titleTemplate = ["Product", "Quantity", "Price", "Total"];
titleTemplate.forEach((title) => {
  const cartTitle = document.createElement("div");
  cartTitle.classList.add("cart-title");
  cartTitle.innerText = `${title}`;
  cartTitles.append(cartTitle);
});

cartContainer.append(cartTitles);

mainCart.products.forEach((product) => {
  const cartItemProduct = document.createElement("div");
  cartItemProduct.classList.add("cart-item_product");
  cartItemProduct.innerText = `${product.name}`;

  const cartItemImage = document.createElement("img");
  cartItemImage.classList.add("cart-item_image");
  cartItemImage.setAttribute("src", `images/${product.image}.jpg`);
  cartItemImage.setAttribute("alt", `${product.name}`);
  cartItemProduct.prepend(cartItemImage);

  const cartItemQuantity = document.createElement("div");
  cartItemQuantity.classList.add("cart-item_quantity");
  cartItemQuantity.innerText = `${product.quantity}`;

  const cartItemPrice = document.createElement("div");
  cartItemPrice.classList.add("cart-item_price");
  cartItemPrice.innerText = `\$${product.price}`;

  const cartItemAmount = document.createElement("div");
  cartItemAmount.classList.add("cart-item_amount");
  cartItemAmount.innerText = `\$${product.amount}`;

  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.append(
    cartItemProduct,
    cartItemQuantity,
    cartItemPrice,
    cartItemAmount
  );

  cartContainer.append(cartItem);
});

const mainContainer = document.querySelector(".main-container");
const discounts = mainContainer.querySelector(".discounts");
discounts.before(cartContainer);

const cartTotal = document.createElement("div");
cartTotal.classList.add("cart-total");

const cartTotalQuantity = document.createElement("div");
cartTotalQuantity.classList.add("cart-total_quantity");

const cartTotalQuantityDescription = document.createElement("p");
cartTotalQuantityDescription.classList.add("cart-total_description");
cartTotalQuantityDescription.innerText = "Общее количество позиций:";

const cartTotalQunatityValue = document.createElement("p");
cartTotalQunatityValue.classList.add("cart-total_value");
cartTotalQunatityValue.innerText = `${mainCart.quantity}`;

cartTotalQuantity.append(cartTotalQuantityDescription, cartTotalQunatityValue);

const cartTotalAmount = document.createElement("div");
cartTotalAmount.classList.add("cart-total_amount");

const cartTotalPriceDescription = document.createElement("p");
cartTotalPriceDescription.classList.add("cart-total_description");
cartTotalPriceDescription.innerText = "Итоговая стоимость заказа:";

const cartTotalPriceValue = document.createElement("p");
cartTotalPriceValue.classList.add("cart-total_value");
cartTotalPriceValue.innerText = `$${mainCart.amount}`;

cartTotalAmount.append(cartTotalPriceDescription, cartTotalPriceValue);

cartTotal.append(cartTotalQuantity, cartTotalAmount);

const totalTitle = document.querySelector(".total > .heading");
totalTitle.after(cartTotal);
