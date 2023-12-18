import React,{useState} from 'react'
import './css/Login.css'
import Quora from './Quora'
export default function Login() {
  const [displayQuora,setDisplayQuora] = useState(false);
  
  const closeQuora = ()=> setDisplayQuora(false);
  return (
    <>
    {displayQuora? <Quora closeQuora={closeQuora}/>:
    <div className='flex_row whole_LS_page'>
      <div className="login_signup_container">
        <div>
          <div><h1><img className='img'
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/800px-Quora_logo_2015.svg.png"
              alt="logo"/></h1></div>
          <div><p>A place to share knowledge and better understanding the world</p></div>
        </div>
        <div className='flex_row login_signup'>
          <div className="signup">
             <div><p>By continuing  you indicates that you agree to Quora's Terms of Service and Privacy Policy</p></div>
             <div>
              <button className='google_signup'>Continue with Google</button>
              <button className='facebook_signup'>Continue with Facebook</button>
              <button className='email_signup'>Sign up with email</button>
             </div>
          </div>
          <div className="devider"></div>
          <div className="login">
            <h3>Login</h3>
            <form action="">
                 <label htmlFor="Email">Email</label>
                 <input type="email" name="Email" id="" />
                 <label htmlFor="Password">Password</label>
                  <input type="password" name="Password"  />
                 <div className='flex_row space_bitween'>
                  <div>Forgot Password?</div>
                  <div className='loginbtn'><button className='login_button'  onClick={()=>setDisplayQuora(true)}>Login</button></div>
                 </div>
            </form>
          </div>
        </div>
        <div></div>
      </div>
      </div>
     }
    </>
  )
}
