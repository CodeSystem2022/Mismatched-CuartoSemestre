const shopContent = document.getElementById("shopContent");
const cart = []; // Este es nuestro carrito, un array vacio

productos.forEach((product) =>{
    const content = document.createElement("div");
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.productName}</h3>
    <p class="price">${product.price} $</p>
    `;
    shopContent.append(content);
});