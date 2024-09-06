import '../../css/MainHeader.css'; // Import the header-specific CSS
import logo from '../../../assets/images/GNS_Horizontal_Black.svg'; // Import the image

const MainHeader = () =>(
    <div>
      <header className='main-page-header'>
      <img src={logo} alt="GNSlogo" width="250vw"/>
          <nav>
              <ul>
                  <li> <a href="#">Shop</a></li>
                  <li> <a href="#About Us">About us</a></li>
                  <li> <a href="FAQ.php">FAQ</a></li>
                  <li> <a href="./login page/login.html" className="active">Login <i className="fa-solid fa-user"></i></a></li>
              </ul>
          </nav>
      </header>
    </div>
);

export default MainHeader;
