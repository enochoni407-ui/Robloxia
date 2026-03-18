// script.js - JavaScript functionality for Robloxia website

// Handle Buy button clicks
function handleBuyClick(event) {
    // Show alert for purchase
    alert('Purchase coming soon!');
}

// Search/filter functionality
function filterProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all Buy buttons
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', handleBuyClick);
    });

    // Add event listener to search input
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', filterProducts);
});