import pic from '../assets/username.png';
import './stylesheets/SplashScreen.css';

function SplashScreen() {
  function addClass() {
    const container = document.getElementById('container');
    container.classList.add('right-panel-active');
  }
  function removeClass() {
    const container = document.getElementById('container');
    container.classList.remove('right-panel-active');
  }
  return (
    <div className="main-splash-container">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form className="form" action="#">
            <h1 className="form-title">Create Account</h1>
            <div className="username-input-container">
              <img src={pic} className="username-img" alt="username-icon" />
              <input className="username-input" type="name" placeholder="Username" />
            </div>
            <button type="submit" className="splash-action-btn marg-btn">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="form" action="#">
            <h1 className="form-title">Sign in</h1>
            <div className="username-input-container">
              <img src={pic} className="username-img" alt="username-icon" />
              <input className="username-input" type="name" placeholder="Username" />
            </div>
            <button type="submit" className="splash-action-btn">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="splash-logo">Earthbnb</h1>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your jorney with us</p>
              <p>Already have an account with us?</p>
              <button type="submit" onClick={removeClass} className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="splash-logo">Earthbnb</h1>
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <p>Don&apos;t have an account with us?</p>
              <button type="submit" onClick={addClass} className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="background" />
    </div>
  );
}

export default SplashScreen;
