import { NavLink } from 'react-router-dom';
import './stylesheets/SplashScreen.css';

function SplashScreen() {
  return (
    <div className="main-splash-container">
      <div className="splash-logo-container">
        <h1 className="splash-title logo-text">Earthbnb</h1>
      </div>
      <div className="splash-btn-container">
        <button type="button" className="action-btn"><NavLink to="/Register" className="register-link splash-link">Sign up</NavLink></button>
        <button type="button" className="action-btn"><NavLink to="/Login" className="login-link splash-link">Sign in</NavLink></button>
      </div>
      <div className="background" />
    </div>
  );
}

export default SplashScreen;
