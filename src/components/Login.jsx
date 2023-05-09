import { useEffect, useState } from 'react';
import pic from '../assets/username.png';
import './stylesheets/Login.css';
import { useNavigate } from 'react-router-dom';

function Login({handleLogin, loginStatus}) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    errors: '',
  })

  useEffect(() => {
    (async () => {
      const {isLoggedIn, user} = await loginStatus();
      if (isLoggedIn) {
        setUser(user);
        navigate('/home')
      }
    })()
  }, [])

  const {username} = user;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/login/', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({user: user})
    });

    const data = await response.json();
    if (data.logged_in) {
      handleLogin(data)
      redirect()
    } else {
      setUser({
        ...user,
        errors: data.errors
      })
    }
  };

  const redirect = () => {
    navigate('/home');
  };

  return (
    <div className="login-container">
      <div className="main-login-container">
        <h1 className="login-title">Welcome Back!</h1>
        <form className="username-input-container" onSubmit={handleSubmit}>
          <img src={pic} className="username-img" alt="username-icon" />
          <input type="text" placeholder="Username" className="username-input" name="username" value={username} onChange={handleChange} />
          <button type="submit" className="login-btn btn">Login</button>
        </form>
        <a className="link-register link" href="/signup">Don&apos;t have an account? Sign up</a>
      </div>
    </div>
  );
}

export default Login;
