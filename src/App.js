import './App.css';
import './MediaScreen.css'
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Hotel from './Pages/Hotel';
import ScrollToTop from './Components/ScrollToTop';
import Flights from './Pages/Flights';
import Footer from './Components/Footer';
import Maldives from './Pages/Maldives';
import FreeEasy from './Pages/FreeEasy';
import Help from './Pages/Help';
import LatestHotel from './Pages/LatestHotel';
import Honeymoon from './Pages/HonymoodWithBudget';
import Contact from './Pages/Contact';
import ThaiLand from './Pages/ThaiLand';
import SingleFlights from './Pages/SingleFlights';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Hotel' element={<Hotel />} />
          <Route exact path='/Flights' element={<Flights />} />
          <Route exact path='/Maldives' element={<Maldives />} />
          <Route exact path='/FreeEasy' element={<FreeEasy />} />
          <Route exact path='/Honeymoon' element={<Honeymoon />} />
          <Route exact path='/Help' element={<Help />} />
          <Route exact path='/LatestHotel' element={<LatestHotel />} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='/ThaiLand' element={<ThaiLand />} />
          <Route exact path='/SingleFlights/:id' element={<SingleFlights />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
