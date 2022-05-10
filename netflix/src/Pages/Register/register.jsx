import { ArrowForwardIos } from "@mui/icons-material"
import { useRef, useState } from "react"
import "./register.css"

export default function Register() {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = ()=>{
        setEmail(emailRef.current.value) //Sets Input Email as Email
    }

    const handleFinish = ()=>{
        setPassword(passwordRef.current.value) //Sets Input Password as Email
    }

  return (

    <div className="register">
        <div className="register-gradient"></div>

        <div className="top">

            <div className="logo"></div>

            <div className="group">
                <select name="Language" id="Language">
                    <option value="">English</option>
                    <option value="">Hindi</option>
                </select>

                <button className="signIn">Sign In</button>
            </div>

        </div>

        <div className="container">
            <p id="register-title">Unlimited Movies, TV Shows and More</p>
            <p id="register-subtitle">Watch Anywhere. Cancel Anytime.</p>
            <p id="register-text">
                Ready to Watch ? Enter your Email to create or restart your membership
            </p>
            { !email ? (
            <div className="input-box">
                <input id="register-email" type="email" placeholder="Email Address" ref={emailRef} />
                <button className="registeredButton" onClick={handleStart}>
                    Get Started
                    <ArrowForwardIos/>
                </button>
            </div>
            ) : (
            <form className="input-box">
                <input id="register-password" type="Password" placeholder="Password" ref={passwordRef} />
                <button className="registeredButton" onClick={handleFinish}>
                    Start
                </button>
            </form>
            )
            }


        </div>
    </div>

  )
}
