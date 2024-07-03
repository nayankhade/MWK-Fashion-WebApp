import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../../style/Footer.css';

export const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <Row className="footer-row">
          <Col md={3} className="item text">
            <h3>MWK FASHION</h3>
            <p>
              Welcome to mwkfashion, where fashion meets convenience. Explore our diverse collection of trendy clothing, accessories, and more, curated to suit your style needs. Enjoy a seamless shopping experience with secure transactions and fast delivery, ensuring satisfaction with every purchase.
            </p>
          </Col>
          <Col md={3} className="item links">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Site Map</a></li>
            </ul>
          </Col>
          <Col md={3} className="item finds">
            <h3>FIND US</h3>
            <ul>
              <li><a href="#">Company: LensJoy</a></li>
              <li><a href="#">Team: 3 Groups</a></li>
              <li><a href="#">Careers: 2023</a></li>
            </ul>
          </Col>
          <Col md={3} className="item query">
            <h3>Any Query</h3>
            <input type="email" className='email' placeholder="enter mail here.." />
            <textarea className='textarea' placeholder="write your queries here.."></textarea>
            <button type='submit'><span>SUBMIT</span></button>
          </Col>
        </Row>
        <Row className="item-social">
          <Col>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          </Col>
        </Row>
        <Row className="copyright-row">
          <Col>
            <p className="copyright" >© 2024 www.mwkfashion.com. All rights reserved.</p>
          </Col>
        </Row>
      </footer>
    </div>
  );
};
