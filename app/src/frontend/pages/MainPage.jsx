import MainHeader from './main/MainHeader';
import MainHomeSection from './main/MainHomeSection';
import MainPlayableGamesSection from './main/MainPlayableGamesSection';
import MainAboutUsSection from './main/MainAboutUs';
import Footer from '../include/Footer'
import "../css/style.css"

function MainPage() {
  return (
    <div className='main-page-body'>
      {/* <MainHeader /> */}
      <MainHomeSection />
      <MainPlayableGamesSection />
      <MainAboutUsSection />
      <Footer />
    </div>
  );
}

export default MainPage;