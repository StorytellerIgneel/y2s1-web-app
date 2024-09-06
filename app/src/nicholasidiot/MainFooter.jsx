import React from 'react';
import './Footer.css'; // Import the footer-specific CSS

const MainFooter = () => (
    <footer class="footer">
    <div class="container">
        <div class="footer-logo">
            <a href="./index.php"><img src="./images/GNS_Horizontal_White.svg" alt=""/></a>
        </div>
        <nav class="footer-nav">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">FAQ</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
        <div class="footer-social">
            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div>
        <div class="footer-copy">
            <p>&copy; 2024 All rights reserved | This website is made with <i class="fa fa-heart"></i> by
                GameNonStop</p>
        </div>
    </div>
</footer>
);

export default MainFooter;
