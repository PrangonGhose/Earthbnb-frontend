import pic from '../assets/username.png';
import './stylesheets/Login.css';

function Register() {
  return (
    <div className="login-container">
      <div className="main-login-container">
        <h1 className="login-title">Hello!</h1>
        <div className="username-input-container">
          <img src={pic} className="username-img" alt="username-icon" />
          <input type="text" placeholder="Username" className="username-input" />
        </div>
        <button type="button" className="login-btn btn">Register</button>
        <a className="link-register link" href="url">Already have an account? Sign in</a>
      </div>
    </div>
  );
}

export default Register;
