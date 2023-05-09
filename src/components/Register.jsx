import { useEffect, useState } from 'react';
import pic from '../assets/username.png';
import './stylesheets/Login.css';
import { useNavigate } from 'react-router-dom';

function Register({loginStatus}) {
  const [user, setUser] = useState({
    username: '',
    errors: '',
  });
  const navigate = useNavigate();
  const { username } = user;

  useEffect(() => {
    (async () => {
      const {isLoggedIn, user} = await loginStatus();
      if (isLoggedIn) {
        setUser(user);
        navigate('/home')
      }
    })()
  }, [])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/users/', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({username: username})
    });

    const data = await response.json();
    if (data.status === 'created') {
      redirect()
    } else {
      setUser({
        ...user,
        errors: data.errors
      })
    }
  };

  const redirect = () => {
    navigate('/Login');
  };

  return (
    <div className="login-container">
      <div className="main-login-container">
        <h1 className="login-title">Hello!</h1>
        <form className="username-input-container" onSubmit={handleSubmit}>
          <img src={pic} className="username-img" alt="username-icon" />
          <input type="text" placeholder="Username" className="username-input" name="username" value={username} onChange={handleChange} />
          <button type="submit" className="login-btn btn">Register</button>
        </form>
        <a className="link-register link" href="/login">Already have an account? Sign in</a>
      </div>
    </div>
  );
}

export default Register;
