let cart = [];

function addToCart(name, price) {
    cart.push({name, price});
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById("cartItems");
    let total = 0;
    cartList.innerHTML = "";

    cart.forEach(item => {
        total += item.price;
        cartList.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

function sendWhatsApp() {
    let message = "Hello, I want to order:%0A";
    let total = 0;

    cart.forEach(item => {
        message += item.name + " - ₹" + item.price + "%0A";
        total += item.price;
    });

    message += "Total: ₹" + total;

    window.open("https://wa.me/919999999999?text=" + message);
}
