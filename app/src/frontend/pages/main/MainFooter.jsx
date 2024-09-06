import React from 'react';
import '../../css/footer.css'; // Import the footer-specific CSS
import footer_logo from '../../../assets/images/GNS_Horizontal_White.svg'; // Import the image
function MainFooter (){
    return(
    <footer className="footer">
    <div className="container">
        <div className="footer-logo">
            <a href="./index.php"><img src={footer_logo} alt=""/></a>
        </div>
        <nav className="footer-nav">
            <a href="#">Home</a>
            <a href="#">Shop</a>z
            <a href="#">FAQ</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
        <div className="footer-social">
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </div>
        <div className="footer-copy">
            <p>&copy; 2024 All rights reserved | This website is made with <i className="fa fa-heart"></i> by
                GameNonStop</p>
        </div>
    </div>
</footer>
)};

export default MainFooter;
