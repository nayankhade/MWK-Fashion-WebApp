import React from 'react';
import "../../style/SingIn.css";
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';

export function SignUp() {

  const navigate = useNavigate();


  const handleLoginClick = () => {
    navigate('/signin');
  };
  return (
    <>
    <Navbar/>
      <div className="container" style={{marginBottom: '30px', marginTop: '160px'}}>
        <h3 className="title">Sign Up to view your profile</h3>
        <h4>Become a member — don’t miss out on deals, discounts.</h4>
        <form action="">
          <div className="input-group">
            <input name="firstName" placeholder="Enter first name here..." />
          </div>
          <div className="input-group">
            <input name="lastName" placeholder="Enter last name here..." />
          </div>
          <div className="input-group">
            <input name="phone" placeholder="Enter phone number here..." />
          </div>
          <div className="input-group">
            <input name="email" placeholder="Enter email here..." />
          </div>
          <div className="input-group">
            <input name="password" type="password" placeholder="Enter password here..." />
          </div>
         
          <button className="signin-btn">Sign up</button>
          <button className="member-btn" onClick={handleLoginClick}>Have a account?</button>
          <div className='aggrement'>
            <h5>By continuing, you agree to mwk's <br /><span>Terms & Conditions</span> and <span>Privacy Policy</span></h5>
          </div>
        </form>
      </div>
    </>
  )
}