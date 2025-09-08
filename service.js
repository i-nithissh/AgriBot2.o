document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            image: "images/soil_monitor.png",
            title: "Real time monitoring",
            tagline: "Stay Connected, Grow Smarter!",
            description: "You can monitor real-time data on soil moisture, temperature, humidity, and weather conditions, ensuring precise irrigation and resource management for optimal crop growth.",
            link: "click.html"
        },
        {
            image: "images/crop_soil.png",
            title: "Smart Crop Recommendation: ",
            tagline: "Grow the Right Crop, the Right Way!",
            description: " Upload a soil image and let our sensors analyze its texture, color, and moisture. Along with real-time NPK and pH data, get precise crop recommendations tailored to your soil.",
            link: "service.html"
        },
        {
            image: "images/weather_analyse.png",
            title: "Smart Agri-Irrigation & Monitoring System",
            tagline: "Watering Crops, Saving Resources!",
            description: "You can automate crop irrigation by monitoring soil moisture and weather conditions in real-time, ensuring efficient water usage and optimal plant health.",
             link: "paddy.html"
        }
    ];

    let currentProductIndex = 0;
    const productImage = document.getElementById('productImage');
    const productTitle = document.getElementById('productTitle');
    const productTagline = document.getElementById('productTagline');
    const productDescription = document.getElementById('productDescription');
    const redirectButton = document.getElementById('redirectButton');
    const watchReviewButton = document.getElementById('watchReview');
    const box = document.querySelector('.box');

    function updateProduct() {
        const product = products[currentProductIndex];
        productImage.src = product.image;
        productTitle.textContent = product.title;
        productTagline.textContent = product.tagline;
        productDescription.textContent = product.description;
         // Update the redirect button's link dynamically
         redirectButton.onclick = function() {
            window.location.href = product.link;
        };

        // Reset animations
        box.style.animation = 'none';
        void box.offsetHeight; // Trigger reflow to restart the animation
        box.style.animation = 'openBox 1s cubic-bezier(.74, .06, .4, .92) forwards';

        // Reset image animation
        productImage.style.animation = 'none';
        void productImage.offsetHeight;
        productImage.style.animation = 'fadeImg 1s ease-in-out forwards';
        productImage.style.animationDelay = '1s';

        // Reset video animation
        const video = document.querySelector('.video');
        video.style.animation = 'none';
        void video.offsetHeight;
        video.style.animation = 'upVideo 1s cubic-bezier(.74, .06, .4, .92) forwards';
        video.style.animationDelay = '1.2s';

        // Reset disc animation
        const disc = document.querySelector('.product__disc');
        disc.style.animation = 'none';
        void disc.offsetHeight;
        disc.style.animation = 'showDisc 1s cubic-bezier(.74, .06, .4, .92) forwards';

        // Reset content animation
        const content = document.querySelector('.product__disc--content');
        content.style.animation = 'none';
        void content.offsetHeight;
        content.style.animation = 'fadeContent 1s ease-in-out forwards';
        content.style.animationDelay = '1s';

        // Reset wishlist and buy button animations
        const wishlist = document.querySelector('.wishlist');
        const buy = document.querySelector('.buy');
        wishlist.style.animation = 'none';
        buy.style.animation = 'none';
        void wishlist.offsetHeight;
        void buy.offsetHeight;
        wishlist.style.animation = 'fadeWish 1s cubic-bezier(.74, .06, .4, .92) forwards';
        buy.style.animation = 'fadeBuy 1s cubic-bezier(.74, .06, .4, .92) forwards';
        wishlist.style.animationDelay = '1s';
        buy.style.animationDelay = '1s';
    }
    
    watchReviewButton.addEventListener('click', function() {
        currentProductIndex = (currentProductIndex + 1) % products.length;
        updateProduct();
    });

    updateProduct();
});