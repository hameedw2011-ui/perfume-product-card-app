// Product Data
const products = [
    {
        id: 1,
        name: 'Midnight Essence',
        category: 'men',
        price: 89.99,
        emoji: '🌙',
        description: 'A bold and sophisticated fragrance for the modern man',
        rating: 5,
        badge: 'Popular'
    },
    {
        id: 2,
        name: 'Floral Dream',
        category: 'women',
        price: 94.99,
        emoji: '🌹',
        description: 'Delicate floral notes with a touch of elegance',
        rating: 5,
        badge: 'Best Seller'
    },
    {
        id: 3,
        name: 'Fresh Breeze',
        category: 'unisex',
        price: 74.99,
        emoji: '🌬️',
        description: 'Light and refreshing for any occasion',
        rating: 4,
        badge: null
    },
    {
        id: 4,
        name: 'Ocean Mist',
        category: 'men',
        price: 84.99,
        emoji: '🌊',
        description: 'Cool and invigorating aquatic fragrance',
        rating: 5,
        badge: 'New'
    },
    {
        id: 5,
        name: 'Rose Garden',
        category: 'women',
        price: 99.99,
        emoji: '🌸',
        description: 'Luxurious rose and vanilla blend',
        rating: 5,
        badge: 'Premium'
    },
    {
        id: 6,
        name: 'Citrus Spark',
        category: 'unisex',
        price: 69.99,
        emoji: '🍊',
        description: 'Energizing citrus notes for daily wear',
        rating: 4,
        badge: null
    },
    {
        id: 7,
        name: 'Amber Glow',
        category: 'women',
        price: 104.99,
        emoji: '✨',
        description: 'Warm and sensual amber fragrance',
        rating: 5,
        badge: 'Luxury'
    },
    {
        id: 8,
        name: 'Spice Code',
        category: 'men',
        price: 89.99,
        emoji: '🌶️',
        description: 'Intense spiced notes for bold personalities',
        rating: 4,
        badge: null
    },
    {
        id: 9,
        name: 'Vanilla Sunset',
        category: 'unisex',
        price: 79.99,
        emoji: '🌅',
        description: 'Sweet vanilla with warm undertones',
        rating: 5,
        badge: null
    }
];

// Shopping Cart
let cart = [];

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    renderProducts('all');
    setupFilterButtons();
    setupCartIcon();
    loadCartFromStorage();
});

// Render Products
function renderProducts(filter) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            ${product.emoji}
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
        </div>
        <div class="product-info">
            <span class="product-category">${product.category}</span>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-rating">
                ${generateStars(product.rating)}
            </div>
            <div class="product-price">$${product.price}</div>
            <div class="product-actions">
                <button class="btn-add-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
                <button class="btn-wishlist" onclick="toggleWishlist(this)" title="Add to Wishlist">
                    ♡
                </button>
            </div>
        </div>
    `;
    return card;
}

// Generate Star Rating
function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < rating; i++) {
        stars += '★';
    }
    return stars;
}

// Setup Filter Buttons
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderProducts(this.getAttribute('data-filter'));
        });
    });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCartToStorage();
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

// Toggle Wishlist
function toggleWishlist(btn) {
    btn.classList.toggle('liked');
}

// Update Cart Count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Setup Cart Icon
function setupCartIcon() {
    document.querySelector('.cart-icon').addEventListener('click', openCart);
}

// Open Cart
function openCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'block';
    updateCartDisplay();
}

// Close Cart
function closeCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'none';
}

// Update Cart Display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        document.getElementById('cartTotal').textContent = '$0.00';
        return;
    }

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        const itemTotal = (item.price * item.quantity).toFixed(2);
        total += parseFloat(itemTotal);

        cartItemElement.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">
                    $${item.price} x ${item.quantity} = $${itemTotal}
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });

    document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartCount();
    updateCartDisplay();
    showNotification('Item removed from cart');
}

// Save Cart to Local Storage
function saveCartToStorage() {
    localStorage.setItem('perfumeCart', JSON.stringify(cart));
}

// Load Cart from Local Storage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('perfumeCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #8b5a3c;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Scroll to Products
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Close Modal when clicking outside
window.addEventListener('click', function(event) {
    const cartModal = document.getElementById('cartModal');
    if (event.target === cartModal) {
        closeCart();
    }
});

// Add slide animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);