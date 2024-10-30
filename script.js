const products = [
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
    { id: 1, name: 'Saco Loose Fit', price: 49900, image: 'images/saco.png' },
];

let cart = [];

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

// Inicializar productos al cargar la página
document.addEventListener("DOMContentLoaded", displayProducts);
