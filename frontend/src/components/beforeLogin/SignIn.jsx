import React from 'react';
import "../../style/SingIn.css";
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';

export function SignIn() {

  const navigate = useNavigate();


  const handleLoginClick = () => {
    navigate('/signup');
  };

  const handleCloseClick = () => {
    navigate('/');
  };

  return (
    <><Navbar />
      <div className="container" style={{ marginTop: '160px' }}>
        <button className="close-btn" onClick={handleCloseClick}>×</button>
        <h3 className="title">Sign In to view your profile</h3>
        <h4>Become a member — don’t miss out on deals, discounts.</h4>
        <form action="">
          <div className="input-group">
            <input name="email" placeholder="Enter email here..." />
          </div>
          <div className="input-group">
            <input name="password" type="password" placeholder="Enter password here..." />
          </div>

          <button className="signin-btn btn">Sign in</button>
          <button className="member-btn btn" onClick={handleLoginClick}>Become a member</button>
          <div className='agreement'>
            <h5>By continuing, you agree to mwk's <br /><span>Terms & Conditions</span> and <span>Privacy Policy</span></h5>
          </div>
        </form>
      </div>
    </>
  );
}
