import pic from "../assets/username.png"
import "./stylesheets/Login.css"

function Login(){
    return(
        <div class='login-container'>
        <div class='main-login-container'>
            <h1 class='login-title'>Welcome Back!</h1>
            <div class='username-input-container'>
                <img src={pic} class='username-img' />
                <input type='text' placeholder='Username' class='username-input'/>
            </div>
            <button class='login-btn btn'>Login</button>
            <a class='link-register link' href="url">Don't have an account? Sign up</a>
        </div>
        </div>
    )
}

export default Login