import React, { useState, useEffect } from 'react';
import "../../style/SingIn.css";
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../beforeLogin/Navbar';
import { useAuth } from '../../Js/AuthContext';
import axios from 'axios';

export function BizSignUp() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    role: '',
    uniqueCode: ''
  });
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRoles = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get('http://localhost:9191/admin/roles');
        setRoles(response.data); // Assuming the response data is a list of roles
      } catch (error) {
        setError('Error fetching roles');
        console.error('Error fetching roles:', error);
      }
      setLoading(false);
    };

    fetchRoles();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9191/signup', formData);
      console.log('Sign up successful:', response.data);
      login(response.data);

      if (response.data.role === 'ADMIN') {
        navigate('/admin/dashboard');
      } else if (response.data.role === 'MANAGER') {
        navigate('/manager/dashboard');
      } else {
        navigate('/user/dashboard');
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleLoginClick = () => {
    navigate('/signin');
  };

  const handleCloseClick = () => {
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <button className="close-btn" onClick={handleCloseClick}>X</button>
        <div className="container" style={{ marginBottom: '30px', marginTop: '160px' }}>
          <h3 className="title">Sign Up to view your profile</h3>
          <h4>Become a member — don’t miss out on deals, discounts.</h4>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input name="firstName" placeholder="Enter first name here..." value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="input-group">
              <input name="lastName" placeholder="Enter last name here..." value={formData.lastName} onChange={handleChange} />
            </div>
            <div className="input-group">
              <input name="phoneNumber" type="tel" placeholder="Enter phone number here..." value={formData.phoneNumber} onChange={handleChange} />
            </div>
            <div className="input-group">
              <input name="email" type="email" placeholder="Enter email here..." value={formData.email} onChange={handleChange} />
            </div>
            <div className="input-group">
              <input name="password" type="password" placeholder="Enter password here..." value={formData.password} onChange={handleChange} />
            </div>
            <div className="input-group-dd">
              <select name="role" value={formData.role} onChange={handleChange}>
                <option value="">Select Role</option>
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
            {formData.role !== 'USER' && (
              <div className="input-group">
                <input name="uniqueCode" type="text" placeholder="Enter unique code here..." value={formData.uniqueCode} onChange={handleChange} />
              </div>
            )}
            <button className="signin-btn btn" type="submit">Sign up</button>
            <button className="member-btn btn" type="button" onClick={handleLoginClick}>Have an account?</button>
            <div className='agreement'>
              <h5>By continuing, you agree to mwk's <br /><span>Terms & Conditions</span> and <span>Privacy Policy</span></h5>
            </div>
          </form>
          {loading && <p>Loading roles...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </>
  );
}
