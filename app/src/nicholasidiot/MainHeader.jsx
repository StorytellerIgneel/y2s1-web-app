import React from 'react';
import './MainHeader.css'; // Import the header-specific CSS

function MainHeader(){
    return(
    <div>
      <header>
      <img src="images/GNS_Horizontal_Black.svg" alt="GNSlogo" width="250vw"/>
          <nav>
              <ul>
                  <li> <a href="#" class="">Shop</a></li>
                  <li> <a href="#About Us">About us</a></li>
                  <li> <a href="FAQ.php">FAQ</a></li>
                  <li> <a href="./login page/login.html" class="active">Login <i class="fa-solid fa-user"></i></a></li>
              </ul>
          </nav>
      </header>
    </div>
  )
};

export default MainHeader;
