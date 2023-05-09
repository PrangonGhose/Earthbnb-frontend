import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import Home from './components/Home';
import MyReservations from './components/MyReservations';
import MakeAReservation from './components/MakeAReservation';
import AddProperty from './components/AddProperty';
import DeleteProperty from './components/DeleteProperty';
import './App.css';

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/' && location.pathname !== '/Register' && location.pathname !== '/Login' && <Navbar />}
      <Routes>
        <Route exact path="/" element={<SplashScreen />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/makeareservation" element={<MakeAReservation />} />
        <Route exact path="/myreservations" element={<MyReservations />} />
        <Route exact path="/addproperty" element={<AddProperty />} />
        <Route exact path="/deleteproperty" element={<DeleteProperty />} />
      </Routes>
    </>
  );
}

export default App;
