import {
  Routes, Route, useLocation, useNavigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import MyReservations from './components/MyReservations';
import MakeAReservation from './components/MakeAReservation';
import AddProperty from './components/AddProperty';
import DeleteProperty from './components/DeleteProperty';
import Mainpage from './pages/Mainpage';
import './App.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const loginStatus = async () => {
    if (sessionStorage.getItem('earthbnb_user')) {
      const tempUser = JSON.parse(sessionStorage.getItem('earthbnb_user'));
      const response = await fetch('http://localhost:3000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: tempUser }),
      });

      const data = await response.json();
      if (data.logged_in) {
        return {
          isLoggedIn: true,
          user: JSON.parse(sessionStorage.getItem('earthbnb_user')),
        };
      }
      sessionStorage.removeItem('earthbnb_user');
    }
    return {
      isLoggedIn: false,
      user: {},
    };
  };

  const handleLogout = () => {
    sessionStorage.removeItem('earthbnb_user');
    navigate('/');
  };

  return (
    <div className="App container-fluid p-0">
      <div className="d-flex p-0 vh-100">
        {location.pathname !== '/' && location.pathname !== '/Register' && location.pathname !== '/Login' && <Navbar handleLogout={handleLogout} />}
        <Routes>
          <Route exact path="/" element={<SplashScreen loginStatus={loginStatus} />} />
          <Route path="/home" element={<Mainpage />} />
          <Route exact path="/makeareservation" element={<MakeAReservation />} />
          <Route exact path="/myreservations" element={<MyReservations loginStatus={loginStatus} />} />
          <Route exact path="/addproperty" element={<AddProperty />} />
          <Route exact path="/deleteproperty" element={<DeleteProperty />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
