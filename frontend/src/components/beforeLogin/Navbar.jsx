import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from "../../style/Navbar.css";
import img1 from "../../images/uil--bars.png";
import img2 from "../../images/uil--times.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../Js/AuthContext';

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsNavOpen(false);
  };

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsNavOpen(false);
  };

  const showProfile = () => {
    setIsProfileOpen(true);
  };

  const hideProfile = () => {
    setIsProfileOpen(false);
  };

  const handleLoginClick = () => {
    navigate('/signin');
  };

  const handleLogoutClick = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <nav className={`nav ${isNavOpen ? 'openNav' : ''} ${isSearchOpen ? 'openSearch' : ''}`}>
        <i className={`uil uil-bars navOpenBtn ${isNavOpen ? 'hide' : ''}`} onClick={toggleNav}><img src={img1} alt="" /></i>
        <a href="#" className="logo">MWK Fashion</a>

        <ul className={`nav-links ${isNavOpen ? 'show' : ''}`}>
          <i className="uil uil-times navCloseBtn" onClick={toggleNav}><img src={img2} alt="" /></i>
          <li><a href="#">Offers</a></li>
          <li className={`navbar-dropdown ${isSearchOpen ? 'hide' : ''}`}>
            <a href="#">MEN</a>
            <div className={`dropdown ${isSearchOpen ? 'hide-dd' : ''}`}>
              <table>
                <tbody>
                  <tr>
                    <td><a href="#">Jeans</a></td>
                    <td><a href="#">Shirts</a></td>
                    <td><a href="#">Pants</a></td>
                  </tr>
                  <tr>
                    <td><a href="#">Jeans</a></td>
                    <td><a href="#">Shirts</a></td>
                    <td><a href="#">Pants</a></td>
                  </tr>
                  <tr>
                    <td><a href="#">Jeans</a></td>
                    <td><a href="#">Shirts</a></td>
                    <td><a href="#">Pants</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>

          <li className={`navbar-dropdown ${isSearchOpen ? 'hide' : ''}`}>
            <a href="#">WOMEN</a>
            <div className={`dropdown ${isSearchOpen ? 'hide-dd' : ''}`}>
              <table>
                <tbody>
                  <tr>
                    <td><a href="#">Jeans</a></td>
                    <td><a href="#">Shirts</a></td>
                    <td><a href="#">Pants</a></td>
                  </tr>
                  <tr>
                    <td><a href="#">Jeans</a></td>
                    <td><a href="#">Shirts</a></td>
                    <td><a href="#">Pants</a></td>
                  </tr>
                  <tr>
                    <td><a href="#">Jeans</a></td>
                    <td><a href="#">Shirts</a></td>
                    <td><a href="#">Pants</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>

          <li className={`navbar-dropdown ${isSearchOpen ? 'hide' : ''}`}>
            <a href="#">KIDS</a>
            <div className={`dropdown ${isSearchOpen ? 'hide-dd' : ''}`}>
              <table>
                <tbody>
                  <tr>
                    <td><a href="#">Jeans</a></td>
                    <td><a href="#">Shirts</a></td>
                    <td><a href="#">Pants</a></td>
                  </tr>
                  <tr>
                    <td><a href="#">Jeans</a></td>
                    <td><a href="#">Shirts</a></td>
                    <td><a href="#">Pants</a></td>
                  </tr>
                  <tr>
                    <td><a href="#">Jeans</a></td>
                    <td><a href="#">Shirts</a></td>
                    <td><a href="#">Pants</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>

          <li className={`navbar-dropdown ${isSearchOpen ? 'hide' : ''}`}>
            <a href="#">BEAUTY</a>
            <div className={`dropdown ${isSearchOpen ? 'hide' : ''}`}>
              <table>
                <tbody>
                  <tr>
                    <td><a href="#">Jeans</a></td>
                    <td><a href="#">Shirts</a></td>
                    <td><a href="#">Pants</a></td>
                  </tr>
                  <tr>
                    <td><a href="#">Jeans</a></td>
                    <td><a href="#">Shirts</a></td>
                    <td><a href="#">Pants</a></td>
                  </tr>
                  <tr>
                    <td><a href="#">Jeans</a></td>
                    <td><a href="#">Shirts</a></td>
                    <td><a href="#">Pants</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>

          <li><a href="#">ABOUT US</a></li>
        </ul>

        <i className="uil uil-search search-icon fa fa-search" id="searchIcon" onClick={handleSearchClick}></i>
        <div className={`search-box ${isSearchOpen ? 'show' : ''}`}>
          <i className="uil uil-search search-icon fa fa-search" onClick={toggleSearch}></i>
          <input type="text" placeholder="Search here..." />
        </div>
        <div className="profile-container" onMouseEnter={showProfile}>
          <FontAwesomeIcon icon={faUser} className="profile-icon white-icon" onClick={showProfile} />
          {isProfileOpen && (
            <div className='signup-in' onMouseEnter={showProfile} onMouseLeave={hideProfile}>
              {isAuthenticated ? (
                <>
                  <h4>Welcome</h4>
                  <p>To access account and manage orders</p>
                  <button className='btn' onClick={handleLogoutClick}>LOGOUT</button>
                </>
              ) : (
                <>
                  <h4>Welcome</h4>
                  <p>To access account and manage orders</p>
                  <button className='btn' onClick={handleLoginClick}>LOGIN / SIGNIN</button>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
