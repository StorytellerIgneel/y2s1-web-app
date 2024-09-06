import React from 'react';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import MainHomeSection from './MainHomeSection';
import MainPlayableGamesSection from './MainPlayableGamesSection';
import MainAboutUsSection from './MainAboutUs';
import "../../css/style.css"

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