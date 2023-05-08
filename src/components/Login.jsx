import pic from '../assets/username.png';
import './stylesheets/Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="main-login-container">
        <h1 className="login-title">Welcome Back!</h1>
        <div className="username-input-container">
          <img src={pic} className="username-img" alt="username-icon" />
          <input type="text" placeholder="Username" className="username-input" />
        </div>
        <button type="button" className="login-btn btn">Login</button>
        <a className="link-register link" href="url">Don&apos;t have an account? Sign up</a>
      </div>
    </div>
  );
}

export default Login;
