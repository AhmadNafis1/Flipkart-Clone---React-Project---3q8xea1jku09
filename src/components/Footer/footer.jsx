import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="footer__col">
          <h4>About</h4>
          <ul className="footer__list">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Flipkart Stories</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Flipkart Wholesale</a></li>
            <li><a href="#">Corporate Information</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Help</h4>
          <ul className="footer__list">
            <li><a href="#">Payments</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Report Infringement</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Policy</h4>
          <ul className="footer__list">
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">EPR Compliance</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Social</h4>
          <ul className="footer__list">
            <li><a href="https://www.facebook.com/flipkart">Facebook</a></li>
            <li><a href="https://twitter.com/flipkart">Twitter</a></li>
            <li><a href="https://www.youtube.com/flipkart">YouTube</a></li>
          </ul>
        </div>
      </div>
      <hr className="footer__hr" />
      <div className="footer__row">
        <div className="footer__col">
          <p>&copy; 2023 Flipkart Pvt Ltd.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
