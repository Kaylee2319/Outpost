import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="footer">
        <div className="nav">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/about">
            {' '}
            About Us{' '}
          </Link>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to="/contactus"
          >
            {' '}
            Contact Us{' '}
          </Link>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to="/veteranprograms"
          >
            {' '}
            Veteran Programs{' '}
          </Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/policy">
            {' '}
            Policy & Guidelines{' '}
          </Link>
        </div>

        <div className="icon-bar">
          <div>
            <p className="follow">Follow Us</p>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/wyncode/" className="facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/wyncode?lang=en" className="twitter">
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/wyncode/?hl=en"
              className="instagram"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
