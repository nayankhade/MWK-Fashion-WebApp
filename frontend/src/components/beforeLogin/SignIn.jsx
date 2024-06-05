import React from 'react';
import "../../style/SingIn.css";

export function SignIn() {
  return (
    <div className="container" style={{marginTop: '160px'}}>
      <h3 className="title">Sign In to view your profile</h3>
      <h4>Become a member — don’t miss out on deals, discounts.</h4>
      <form action="">
        <div className="input-group">
          <input name="email" placeholder="Enter email here..." />
        </div>
        <div className="input-group">
          <input name="password" type="password" placeholder="Enter password here..." />
        </div>
        <button className="signin-btn">Sign in</button>
        <button className="member-btn">Become a member</button>
        <div className='aggrement'>
          <h5>By continuing, you agree to mwk's <br/><span>Terms & Conditions</span> and <span>Privacy Policy</span></h5>
        </div>
      </form>
    </div>
  );
}
