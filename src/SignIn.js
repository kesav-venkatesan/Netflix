import './SignIn.css'
import {Footer} from './App.js'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
const SignIn=()=>{
    const navigation=useNavigate();
    const [inputText,setText]=useState();
    function movetonext(){
        navigation("/HomePage",{state:{text:inputText}})
    }
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return <div>
        <div className="SignIn_Page" style={{background: `linear-gradient(to bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.7)) ,url(${"/images/header-image.png"})`}}>
        <div className="fancy">
        <span style={{ fontSize: "56px" }}>N</span>
        <span style={{ marginTop: "1px", fontSize: "53px" }}>E</span>
        <span style={{ marginTop: "2px", fontSize: "50px" }}>T</span>
        <span style={{ marginTop: "2px", fontSize: "50px" }}>F</span>
        <span style={{ marginTop: "2px", fontSize: "50px" }}>L</span>
        <span style={{ marginTop: "1px", fontSize: "53px" }}>I</span>
        <span style={{ fontSize: "56px" }}>X</span>
      </div>
        <div className='signInBox'>
            <div className='div1'>
                <h1 style={{letterSpacing:"1px"}}>Sign In</h1>
                <input type='text' placeholder='  Username' onChange={(e)=>setText(e.target.value)}></input>
                <input type='text' placeholder='  Password'></input>
                <button style={{backgroundColor:"red" ,color:"white", border:"none" , borderRadius:"10px",fontWeight:"500"}} onClick={movetonext}>Sign In</button>
                <h5 style={{color:"#b3b3b3",textAlign:"center"}}>OR</h5>
                <button style={{backgroundColor:"hsla(180, 100.00%, 97.10%, 0.20)" ,color:"white", border:"none" , borderRadius:"10px",fontWeight:"500",transform:"translateY(-30px)"}}>Use a Sign-in Code</button>
                <h5  style={{color:"#f0ffff",textAlign:"center",textDecoration:"underline",transform:"translateY(-30px)"}}>Forgot Password?</h5>
            </div>
            <div className='div2'>
                <form>
                    <input type='checkbox'></input>
                    <label> Remember Me</label>
                </form>
                <h6><span className='alone'>New to Netflix? </span>Sign up now.
                </h6>
                <p style={{fontSize:"12px"}}>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                <a className='learnmore'>Learn more.</a>
            </div>
        </div>
    </div>
    <Footer></Footer>
    </div>
}
export  default SignIn;