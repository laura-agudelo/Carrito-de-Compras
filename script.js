const products = [
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 2, name: 'Camiseta', price: 39900, image: 'images/camiseta.png' },
    { id: 3, name: 'Joggers', price: 64900, image: 'images/joggers.png' },
    { id: 4, name: 'Blusa escote', price: 29900, image: 'images/blusa escote.png' },
    { id: 5, name: 'Top de un hombro', price: 29900, image: 'images/top.png' },
    { id: 6, name: 'Camiseta Esqueleto', price: 29900, image: 'images/esqueleto.png' },
    { id: 7, name: 'Camiseta entallada', price: 19900, image: 'images/entallada.png' },
    { id: 8, name: 'Blusa cuello en v', price: 49900, image: 'images/cuello v.png' },
    { id: 9, name: 'Camiseta manga larga', price: 29900, image: 'images/manga larga.png' },
    { id: 10, name: 'Body con escote en v', price: 39900, image: 'images/body.png' },
    { id: 11, name: 'Pack de 2 tops', price: 39900, image: 'images/tops.png' },
    { id: 12, name: 'Camiseta con estampado', price: 39900, image: 'images/estampado.png' },
    { id: 13, name: 'Hoodie', price: 59900, image: 'images/hoodie.png' },
    { id: 14, name: 'Leggins', price: 64900, image: 'images/leggins.png' },
    { id: 15, name: 'Shorts', price: 44900, image: 'images/shorts.png' },
    { id: 16, name: 'Camiseta estilo polo', price: 49900, image: 'images/polo.png' },
    { id: 17, name: 'Blusa manga sisa', price: 49900, image: 'images/sisa.png' },
    { id: 18, name: 'Shorts elegante', price: 109900, image: 'images/elegante.png' },
    { id: 19, name: 'Shorts en franela', price: 39900, image: 'images/franela.png' },
    { id: 20, name: 'Shorts en nailon', price: 59900, image: 'images/nailon.png' },
];
let cart = [];

document.getElementById("cart-button").addEventListener("click", () => {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.classList.toggle("hidden");
});

// Función para mostrar productos
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h5>${product.name}</h5>
            <p>Precio: $${product.price.toLocaleString()} COP</p>
            <button onclick="addToCart(${product.id})">Agregar al carrito</button>
        `;
        productList.appendChild(productCard);
    });
}

// Agregar producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    renderCart();
}

// Mostrar el carrito
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toLocaleString()} COP</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
            </td>
            <td>$${subtotal.toLocaleString()} COP</td>
            <td><button class="btn danger" onclick="removeFromCart(${index})">Eliminar</button></td>
        `;
        cartItems.appendChild(row);
    });

    document.getElementById('total-amount').innerText = `$${total.toLocaleString()} COP`;
}

// Actualizar cantidad de productos en el carrito
function updateQuantity(index, newQuantity) {
    cart[index].quantity = parseInt(newQuantity);
    renderCart();
}

// Eliminar producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// Simular la compra
function checkout() {
    if (cart.length === 0) {
        alert("El carrito está vacío");
    } else {
        alert("¡Compra realizada con éxito!");
        cart = [];
        renderCart();
    }
}

// Inicializar productos al cargar la página
document.addEventListener("DOMContentLoaded", displayProducts);
