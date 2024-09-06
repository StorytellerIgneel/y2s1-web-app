import React from 'react';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import MainHomeSection from './MainHomeSection';
import MainPlayableGamesSection from './MainPlayableGamesSection';
import MainAboutUsSection from './MainAboutUs';
import './style.css'; // Import your CSS file

function MainPage() {
  return (
    <div>
      <MainHeader />
      <MainHomeSection />
      <MainPlayableGamesSection />
      <MainAboutUsSection />
      <MainFooter />
    </div>
  );
}

export default MainPage;