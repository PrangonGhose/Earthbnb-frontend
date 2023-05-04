import pic from "../assets/username.png"
import "./stylesheets/Login.css"

function Register(){
    return(
        <div class='login-container'>
        <div class='main-login-container'>
            <h1 class='login-title'>Hello!</h1>
            <div class='username-input-container'>
                <img src={pic} class='username-img' />
                <input type='text' placeholder='Username' class='username-input'/>
            </div>
            <button class='login-btn btn'>Register</button>
            <a class='link-register link' href="url">Already have an account? Sign in</a>
        </div>
        </div>
    )
}

export default Register