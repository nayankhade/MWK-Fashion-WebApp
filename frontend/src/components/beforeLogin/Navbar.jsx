import React, { useState } from 'react';
import style from "../../style/Navbar.css";
import img1 from "../../images/uil--bars.png"
import img2 from "../../images/uil--times.png"
import logo from "../../images/mwk_logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'; 



export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsNavOpen(false);
  };

  const handleSearchClick = () => {
    const nav = document.querySelector(".nav");
    const searchIcon = document.querySelector("#searchIcon");

    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");

    if (nav.classList.contains("openSearch")) {
      searchIcon.classList.replace("uil-search", "uil-times");
    } else {
      searchIcon.classList.replace("uil-times", "uil-search");
    }
  };

  const handleNavOpenClick = () => {
    const nav = document.querySelector(".nav");
    const searchIcon = document.querySelector("#searchIcon");

    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
  };

  const handleNavCloseClick = () => {
    const nav = document.querySelector(".nav");
    nav.classList.remove("openNav");
  };

  
  const showProfile = () => {
    setIsProfileOpen(true);
  };

  const hideProfile = () => {
    setIsProfileOpen(false);
  };

  return (
    <div>
      <nav className={`nav ${isNavOpen ? 'openNav' : ''} ${isSearchOpen ? 'openSearch' : ''}`}>
        <i className={`uil uil-bars navOpenBtn ${isNavOpen ? 'hide' : ''}`} onClick={toggleNav}><img src={img1} alt="" /></i>
        <a href="#" className="logo">MWK Fashion</a>

        <ul className={`nav-links ${isNavOpen ? 'show' : ''}`}>
          <i className="uil uil-times navCloseBtn" onClick={toggleNav}><img src={img2} alt="" /></i>
          <li><a href="#">Offers</a></li>
          <li><a href="#">MEN</a></li>
          <li><a href="#">WOMEN</a></li>
          <li><a href="#">KIDS</a></li>
          <li><a href="#">BEAUTY</a></li>
          <li><a href="#">About Us</a></li>

        </ul>

        <i className="uil uil-search search-icon fa fa-search" id="searchIcon" onClick={handleSearchClick}></i>
        <div className={`search-box ${isSearchOpen ? 'show' : ''}`}>
          <i className="uil uil-search search-icon fa fa-search" onClick={toggleSearch}></i>
          <input type="text" placeholder="Search here..." />
        </div>
        <div className="profile-container" onMouseEnter={showProfile}>
            <FontAwesomeIcon icon={faUser} className="profile-icon white-icon" onClick={showProfile} />
            {isProfileOpen && (
              <div className='signup-in' onMouseEnter={showProfile}  onMouseLeave={hideProfile}>
                <h4>Welcome</h4>
                <p>To access account and manage orders</p>
                <button className='btn'>LOGIN / SIGNIN</button>
              </div>
            )}
        </div>
      </nav>
    </div>
  );
}
