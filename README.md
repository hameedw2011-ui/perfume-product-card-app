# 🌸 Perfume Factory - Product Card App

A modern, responsive web application for displaying and managing perfume products with an interactive shopping cart system.

## Features

✨ **Product Display**
- Beautiful product cards with images (emoji), names, and descriptions
- Product ratings and badges
- Filter by category (All, For Men, For Women, Unisex)
- Responsive grid layout

🛒 **Shopping Cart**
- Add products to cart
- Remove items from cart
- Real-time cart count badge
- Cart total calculation
- Local storage persistence

❤️ **Wishlist**
- Add products to wishlist
- Visual feedback with heart icon

📱 **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes
- Smooth animations and transitions

## Project Structure

```
perfume-product-card-app/
├── index.html      # Main HTML structure
├── styles.css      # Complete styling
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## File Descriptions

### index.html
Main HTML file containing:
- Header with navigation and shopping cart icon
- Hero section with call-to-action
- Products section with filter buttons
- Shopping cart modal
- Footer

### styles.css
Comprehensive styling including:
- Modern color scheme (browns and earth tones)
- Hover effects and animations
- Product card styling
- Shopping cart modal design
- Responsive breakpoints for mobile and tablet

### script.js
JavaScript functionality for:
- Product data management
- Dynamic product rendering
- Filter functionality
- Shopping cart operations
- Local storage for cart persistence
- Notifications system

## How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hameedw2011-ui/perfume-product-card-app.git
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # or
     npx http-server
     ```

3. **Browse products:**
   - Use filter buttons to browse by category
   - Click "Add to Cart" to add products
   - Click heart icon to add to wishlist

4. **Manage cart:**
   - Click shopping cart icon to view cart
   - Remove items as needed
   - Proceed to checkout when ready

## Product Features

### Product Data
Each product includes:
- ID and name
- Category (men, women, unisex)
- Price
- Description
- Rating (1-5 stars)
- Emoji icon
- Optional badge (Popular, Best Seller, New, Premium, Luxury)

### Default Products
9 sample perfume products included:
- Midnight Essence (Men)
- Floral Dream (Women)
- Fresh Breeze (Unisex)
- Ocean Mist (Men)
- Rose Garden (Women)
- Citrus Spark (Unisex)
- Amber Glow (Women)
- Spice Code (Men)
- Vanilla Sunset (Unisex)

## Customization

### Add New Products
Edit `script.js` and add to the `products` array:

```javascript
{
    id: 10,
    name: 'Your Product Name',
    category: 'men', // 'women' or 'unisex'
    price: 89.99,
    emoji: '🌹',
    description: 'Product description',
    rating: 5,
    badge: 'New' // or null
}
```

### Customize Colors
Main colors in `styles.css`:
- Primary: `#8b5a3c` (brown)
- Accent: `#a0725f` (light brown)
- Highlight: `#ff6b6b` (red)
- Background: `#f9f7f4` (cream)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with animations
- **Vanilla JavaScript** - Functionality
- **Local Storage API** - Cart persistence

## Features to Add (Future Enhancements)

- [ ] Backend integration with API
- [ ] User authentication
- [ ] Product search functionality
- [ ] Advanced filtering options
- [ ] Product reviews and comments
- [ ] Payment processing
- [ ] Order history
- [ ] Admin panel
- [ ] Product images (upload to replace emoji)
- [ ] Dark mode toggle

## License

MIT License - Feel free to use this project for your needs

## Author

Created for Perfume Factory E-commerce Platform

---

**Happy coding! 🌸✨**