const cartProducts = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');

products.forEach(product => {
    const decBtn = product.querySelector('.product__quantity-control_dec');
    const incBtn = product.querySelector('.product__quantity-control_inc');
    const quantityValue = product.querySelector('.product__quantity-value');
    
    decBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityValue.textContent);
        if (quantity > 1) {
            quantityValue.textContent = quantity - 1;
        }
    });
    
    incBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityValue.textContent);
        quantityValue.textContent = quantity + 1;
    });
    
    const addBtn = product.querySelector('.product__add');
    addBtn.addEventListener('click', () => {
        const id = product.dataset.id;
        const quantity = parseInt(quantityValue.textContent);
        const imageSrc = product.querySelector('.product__image').src;
        
        addToCart(id, quantity, imageSrc);
    });
});

function addToCart(id, quantity, imageSrc) {
    const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);
    
    if (existingProduct) {
        const countElement = existingProduct.querySelector('.cart__product-count');
        const currentCount = parseInt(countElement.textContent);
        countElement.textContent = currentCount + quantity;
    } else {
        const cartProduct = document.createElement('div');
        cartProduct.className = 'cart__product';
        cartProduct.dataset.id = id;
        
    cartProduct.innerHTML = `<img class="cart__product-image" src="${imageSrc}"><div class="cart__product-count">${quantity}</div>`;
        
        const removeBtn = document.createElement('div');
        removeBtn.className = 'cart__product-remove';
        removeBtn.textContent = '×';
        removeBtn.style.cssText = 'position:absolute; top:0; left:0; color:red; cursor:pointer; ' +
                                'font-size:30px; width:30px; height:30px; display:flex; ' +
                                'align-items:center; justify-content:center; background:white; ' +
                                'border-radius:50%; border:2px solid red;';
                                
        removeBtn.addEventListener('click', () => {
            cartProduct.remove();
        });
        
        cartProduct.appendChild(removeBtn);
        cartProducts.appendChild(cartProduct);
    }
}