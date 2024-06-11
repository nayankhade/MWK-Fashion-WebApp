import React, { useState } from 'react';
import "../../style/SingIn.css";
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { useAuth } from '../../Js/AuthContext';
import axios from 'axios';

export function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const response = await axios.post('http://localhost:9191/login', loginData);
      console.log('Login successful:', response.data);
      login(response.data); // Call login function from context
      navigate('/'); // Redirect to profile page
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleCloseClick = () => {
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: '160px' }}>
        <button className="close-btn" onClick={handleCloseClick}>×</button>
        <h3 className="title">Sign In to view your profile</h3>
        <h4>Become a member — don’t miss out on deals, discounts.</h4>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input name="email" placeholder="Enter email here..." value={loginData.email} onChange={handleChange} />
          </div>
          <div className="input-group">
            <input name="password" type="password" placeholder="Enter password here..." value={loginData.password} onChange={handleChange} />
          </div>
          <button className="signin-btn btn" type="submit">Sign in</button>
          <button className="member-btn btn" type="button" onClick={handleSignUpClick}>Become a member</button>
          <div className='agreement'>
            <h5>By continuing, you agree to mwk's <br /><span>Terms & Conditions</span> and <span>Privacy Policy</span></h5>
          </div>
        </form>
      </div>
    </>
  );
}
