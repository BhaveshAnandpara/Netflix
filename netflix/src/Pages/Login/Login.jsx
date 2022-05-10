
import { Facebook } from "@mui/icons-material"
import "./Login.css"

export default function Login() {


  return (

    <div className="register">
        <div className="register-gradient">

        <div className="top">
            <div className="logo"></div>
        </div>

        <div className="login-container">

            <p className="login-title">Sign In</p>

            <div className="login-input">
                <input type="email" className="input-email" placeholder="Email or Phone Number"/>
                <input type="password" className="input-password" placeholder="Password"/>
            </div>

            <button className="login-signIn">Sign In</button>

            <div className="reset-password">
                <div className="remember-pass">
                    <input type="checkbox" className="remeber-pass-checkbox" />
                    Remember me
                </div>
                <a href="">Need Help?</a>
            </div>

<div className="lowePart">


            <div className="login-fb">
                <Facebook/>
                Login With Facebook
            </div>

            <div className="new-user">
                <span> New to Netflix ? </span>
                <a href="">Sign up Now.</a>
            </div>

            <div className="reCaptha">
            This page is protected by Google reCAPTCHA to ensure you're not a bot. 
            <a href=""> Learn more. </a>
            </div>

</div>

        </div>

        </div>
    </div>

  )
}
