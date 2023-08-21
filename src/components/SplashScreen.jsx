import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { func } from 'prop-types';
import pic from '../assets/username.png';
import './stylesheets/SplashScreen.css';

export default function SplashScreen({ loginStatus }) {
  function addClass() {
    const container = document.getElementById('container');
    container.classList.add('right-panel-active');
  }

  function removeClass() {
    const container = document.getElementById('container');
    container.classList.remove('right-panel-active');
  }

  const [user, setUser] = useState({
    username: '',
    errors: [],
  });

  const navigate = useNavigate();
  const { username } = user;

  useEffect(() => {
    (async () => {
      const { isLoggedIn, user } = await loginStatus();
      if (isLoggedIn) {
        setUser(user);
        navigate('/home');
      }
    })();
  }, [loginStatus, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    });

    const data = await response.json();

    if (data.logged_in) {
      sessionStorage.setItem('earthbnb_user', JSON.stringify(data.user));
      setUser({
        ...user,
        username: '',
      });
      navigate('/home');
    } else {
      setUser({
        ...user,
        errors: data.errors.username,
      });
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });

    const data = await response.json();
    if (data.status === 'created') {
      setUser({
        ...user,
        username: '',
      });
      window.location.reload(false);
    } else {
      setUser({
        ...user,
        errors: data.errors.username,
      });
    }
  };

  return (
    <div className="main-splash-container">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form className="form" action="#" onSubmit={handleRegister}>
            <div>
              {user.errors.map((error) => (
                <h3 className="error-notification" key={error}>{error}</h3>
              ))}
            </div>
            <h1 className="form-title">Create Account</h1>
            <div className="username-input-container">
              <img src={pic} className="username-img" alt="username-icon" />
              <input className="username-input" required type="name" placeholder="Username" name="username" value={username} onChange={handleChange} />
            </div>
            <button type="submit" className="splash-action-btn marg-btn">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="form" action="#" onSubmit={handleLogin}>
            <div>
              {user.errors.map((error) => (
                <h3 className="error-notification" key={error}>{error}</h3>
              ))}
            </div>
            <h1 className="form-title">Sign in</h1>
            <div className="username-input-container">
              <img src={pic} className="username-img" alt="username-icon" />
              <input className="username-input" required type="name" placeholder="Username" name="username" value={username} onChange={handleChange} />
            </div>
            <button type="submit" className="splash-action-btn">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="splash-logo">Earthbnb</h1>
              <h1>Hello, Friend!</h1>
              <p className="instruction">Enter your personal details and start your jorney with us</p>
              <p>Already have an account with us?</p>
              <button type="submit" onClick={removeClass} className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="splash-logo">Earthbnb</h1>
              <h1>Welcome Back!</h1>
              <p className="instruction">To keep connected with us please login with your personal info</p>
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

SplashScreen.propTypes = {
  loginStatus: func.isRequired,
};
