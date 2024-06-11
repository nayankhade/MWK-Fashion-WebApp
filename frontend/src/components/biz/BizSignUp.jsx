import React from 'react';
import "../../style/SingIn.css";
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../beforeLogin/Navbar';

export function BizSignUp() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/signin');
  };

  const handleCloseClick = () => {
    // You can implement the close action here, for example, navigating to another route
    navigate('/');
  };

  return (
    <>
      <Navbar/>
      <div className="wrapper">
      <button className="close-btn" onClick={handleCloseClick}>X</button>
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
          <div className="input-group-dd">
            <select name="role">
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <button className="signin-btn btn">Sign up</button>
          <button className="member-btn btn" onClick={handleLoginClick}>Have an account?</button>
          <div className='agreement'>
            <h5>By continuing, you agree to mwk's <br /><span>Terms & Conditions</span> and <span>Privacy Policy</span></h5>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}
