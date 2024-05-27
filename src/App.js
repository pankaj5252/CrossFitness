import './App.css';
import AboutUs from './View/AboutUs';
import Events from './View/Events';
import Footer from './View/Footer';
import Groups from './View/Groups';
import Header from './View/Header';
import Membership from './View/Membership';
import NavHeadline from './View/NavHeadline';
import Offers from './View/Offers';
import PersonalTraining from './View/PersonalTraining';
import Slider from './View/Slider';
import StrengthTraining from './View/StrengthTraining';

function App() {
  return (
    <>
      <NavHeadline />
      <Header />
      <Slider />
      <Offers />
      <Groups />
      <StrengthTraining />
      <PersonalTraining />
      <Events />
      <Membership />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
