// 1. Используем классы в домашнем задании. Необходимо: класс Cart (корзина), класс Product (товар).
// 2. В классе корзины реализуем методы:
// 1) Добавление товара в корзину
// 2) Подсчет стоимости в корзине
// 3) Рендер корзины

// 3. Выводим основной список (откуда добавлять товары в корзину) Создать класс List (?) и отрендерить его.
// https://github.com/HaseProgram/GeekBrainsLvl1/tree/lesson6/lesson6

// Должно начать выглядить как нормальный интернет магазин (с версткой и всеми плюшками). Можно брать идеи из реализации todoapp с вебинара

class Cart {
  products = [];
  amount = 0;
  quantity = 0;
  container = null;
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

  addToCart(product) {
    let boughtProduct = product.getBoughtProduct();
    let indexOfExisting = this.products.findIndex(
      (cartItem) => cartItem.id == boughtProduct.id
    );
    if (boughtProduct === null) {
      console.log(
        "К сожалению, товаров в нужном количестве не имеется в наличии"
      );
    } else if (indexOfExisting === -1) {
      this.products.push(boughtProduct);
      this.countTotalAmount();
      this.countTotalQuantity();
      this.render();
    } else {
      let existingItem = this.products[indexOfExisting];
      existingItem.quantity += boughtProduct.quantity;
      existingItem.amount += boughtProduct.amount;
      this.countTotalAmount();
      this.countTotalQuantity();
      this.render();
    }
  }

  decreaseCart(product) {
    let indexOfExisting = this.products.findIndex(
      (cartItem) => cartItem.id == product.id
    );
    if (indexOfExisting === -1) {
      console.log("Данный товар еще не был добавлен в корзину");
    } else {
      let decreasedProduct = this.products[indexOfExisting];
      decreasedProduct.quantity--;
      if (decreasedProduct.quantity < 1) {
        this.products.splice(indexOfExisting, 1);
      } else {
        decreasedProduct.amount =
          decreasedProduct.quantity * decreasedProduct.price;
      }
      this.countTotalAmount();
      this.countTotalQuantity();
      this.render();
      // updateProduct();
    }
  }

  render() {
    // Создаем основной контейнер корзины со списком товаров
    if (!this.container) {
      this.container = document.createElement("div");
      this.container.classList.add("cart-container");
      document.body.append(this.container);

      // Рендерим заголовки с описанием каждой характеристики товара
      const cartTitles = document.createElement("div");
      cartTitles.classList.add("cart-titles");

      let titleTemplate = ["Product", "Quantity", "Price", "Total"];
      titleTemplate.forEach((title) => {
        const cartTitle = document.createElement("div");
        cartTitle.classList.add("cart-title");
        cartTitle.innerText = `${title}`;
        cartTitles.append(cartTitle);
      });

      this.container.append(cartTitles);

      const breadCrumbs = document.querySelector(".bread-crumbs");
      breadCrumbs.after(this.container);

      // Создаем блок "Итого"
      const cartTotal = document.createElement("div");
      cartTotal.classList.add("cart-total");

      const cartTotalQuantity = document.createElement("div");
      cartTotalQuantity.classList.add("cart-total_quantity");

      const cartTotalQuantityDescription = document.createElement("p");
      cartTotalQuantityDescription.classList.add("cart-total_description");
      cartTotalQuantityDescription.innerText = "Общее количество позиций:";

      const cartTotalQuantityValue = document.createElement("p");
      cartTotalQuantityValue.classList.add("cart-total_quantity-value");

      cartTotalQuantity.append(
        cartTotalQuantityDescription,
        cartTotalQuantityValue
      );

      const cartTotalAmount = document.createElement("div");
      cartTotalAmount.classList.add("cart-total_amount");

      const cartTotalAmountDescription = document.createElement("p");
      cartTotalAmountDescription.classList.add("cart-total_description");
      cartTotalAmountDescription.innerText = "Итоговая стоимость заказа:";

      const cartTotalAmountValue = document.createElement("p");
      cartTotalAmountValue.classList.add("cart-total_amount-value");

      cartTotalAmount.append(cartTotalAmountDescription, cartTotalAmountValue);

      cartTotal.append(cartTotalQuantity, cartTotalAmount);

      const totalTitle = document.querySelector(".total > .heading");
      totalTitle.after(cartTotal);
    }

    // Удаляем со страницы прошлое содержимое
    // To Дмитрий: не очень нравится вариант с удалением содержимого с помощью remove, но более элегантного способа для обновления корзины найти не смог

    const itemsToRemove = document.querySelectorAll(".cart-item");
    itemsToRemove.forEach((item) => {
      item.remove();
    });

    // Для каждого товара создаем блок div, который отображаем на странице

    this.products.forEach((product) => {
      const cartItemProduct = document.createElement("p");
      cartItemProduct.classList.add("cart-item_product");
      cartItemProduct.innerText = `${product.name}`;

      const cartItemImage = document.createElement("img");
      cartItemImage.classList.add("cart-item_image");
      cartItemImage.setAttribute("src", `images/${product.image}.jpg`);
      cartItemImage.setAttribute("alt", `${product.name}`);
      cartItemProduct.prepend(cartItemImage);

      const cartItemQuantity = document.createElement("p");
      cartItemQuantity.classList.add("cart-item_quantity");
      cartItemQuantity.innerText = `${product.quantity}`;

      const cartItemPrice = document.createElement("p");
      cartItemPrice.classList.add("cart-item_price");
      cartItemPrice.innerText = `\$${product.price}`;

      const cartItemAmount = document.createElement("p");
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
      this.container.append(cartItem);
    });

    const cartTotalQuantityValue = document.querySelector(
      ".cart-total_quantity-value"
    );
    cartTotalQuantityValue.innerText = `${this.quantity}`;

    const cartTotalAmountValue = document.querySelector(
      ".cart-total_amount-value"
    );
    cartTotalAmountValue.innerText = `$${this.amount}`;
  }
}

class Product {
  constructor(name, price, quantity, imageLink, id) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.image = imageLink;
    this.id = id;
  }

  getBoughtProduct() {
    let quantityField = document.getElementById(`${this.id}`);
    let quantity = +quantityField.value;
    if (quantity > this.quantity) {
      return null;
    } else {
      this.quantity = this.quantity - quantity;
      let boughtProduct = {};
      boughtProduct.name = this.name;
      boughtProduct.price = this.price;
      boughtProduct.quantity = quantity;
      boughtProduct.amount = boughtProduct.quantity * boughtProduct.price;
      boughtProduct.image = this.image;
      boughtProduct.id = this.id;
      return boughtProduct;
    }
  }

  btnClicked() {
    const cart = MyCart;
    MyCart.addToCart(this);
  }

  createButton() {
    const btn = document.createElement("a");

    btn.classList.add("add-btn");
    btn.innerHTML = "add to cart".toUpperCase();

    btn.addEventListener("click", this.btnClicked.bind(this));
    return btn;
  }

  createQuantityField() {
    const qnt = document.createElement("input");
    qnt.classList.add("quantity-field");
    qnt.id = this.id;
    qnt.setAttribute("type", "number");
    qnt.setAttribute("min", "1");
    qnt.setAttribute("max", `${this.quantity}`);
    qnt.setAttribute("value", "1");
    return qnt;
  }

  createDecreaseButton() {
    let btn = document.createElement("a");
    btn.classList.add("decrease-button");
    btn.insertAdjacentHTML("afterbegin", '<i class="far fa-minus-square"></i>');

    btn.addEventListener("click", this.decreaseBtnClicked.bind(this));
    return btn;
  }

  decreaseBtnClicked() {
    const cart = MyCart;
    MyCart.decreaseCart(this);
  }
}

class List {
  productList = [];
  element = null;

  addToList(product) {
    let exists = this.productList.includes(product);
    if (!exists) {
      this.productList.push(product);
      this.render();
    } else {
      console.log("Данный продукт уже имеется в каталоге");
    }
  }

  render() {
    if (!this.element) {
      this.element = document.createElement("div");
      this.element.classList.add("list-container");
    }

    this.productList.forEach((product) => {
      if (!product.renderred) {
        const item = document.createElement("div");
        item.classList.add("list-item");

        const itemImage = document.createElement("img");
        itemImage.classList.add("item-img");
        itemImage.setAttribute("src", `images/${product.image}.jpg`);
        itemImage.setAttribute("alt", `${product.name}`);

        const itemName = document.createElement("h3");
        itemName.classList.add("item-name");
        itemName.innerText = `${product.name}`;

        const itemPrice = document.createElement("p");
        itemPrice.classList.add("item-price");
        itemPrice.innerText = `\$${product.price}`;

        const itemQuantity = document.createElement("p");
        itemQuantity.classList.add("item-quantity");
        itemQuantity.innerText = `Наличие: ${product.quantity} шт.`;

        const itemQuantityCounters = document.createElement("div");
        itemQuantityCounters.append(
          product.createQuantityField(),
          product.createDecreaseButton()
        );

        item.append(
          itemImage,
          itemName,
          itemPrice,
          itemQuantity,
          itemQuantityCounters,
          product.createButton()
        );
        this.element.append(item);

        product.renderred = true;
      }
    });
    const mainContainer = document.querySelector(".main-container");
    mainContainer.append(this.element);
  }
}

let MyCart = new Cart();
MyCart.render();

const MyList = new List();
MyList.render();

const tShirt = new Product("Футболка", 5, 100, "t-shirt", "01");
const cargo = new Product("Брюки карго", 20, 100, "cargo", "02");
const hoodie = new Product("Мужское худи", 17, 100, "hoodie", "03");
const jeans = new Product("Джинсы", 30, 100, "jeans", "04");
const pullover = new Product("Женский пуловер", 25, 100, "pullover", "05");
const shirt = new Product("Рубашка", 5, 100, "shirt", "06");

MyList.addToList(tShirt);
MyList.addToList(cargo);
MyList.addToList(hoodie);
MyList.addToList(jeans);
MyList.addToList(pullover);
MyList.addToList(shirt);

// Остались некоторые вопросы:
// - Как можно реализовать добавление сразу нескольких объектов через метод addToList? Пример:
// MyList.addToList(tShirt, cargo, hoodie)
// - Чем можно заменить такой блок в методе рендера корзины?
// const itemsToRemove = document.querySelectorAll(".cart-item");
//     itemsToRemove.forEach((item) => {
//       item.remove();
//     });
