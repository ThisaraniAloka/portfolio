import React from 'react';
import './Footer.css';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
      {/* --- TOP --- */}
      <div className="footer-top">
        <div className="footer-top-left">
          <h2>Thisarani</h2>
          <p>I am a frontend developer, backend developer and full stack developer.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user" />
            <input type='email' placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr />

      {/* --- BOTTOM --- */}
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2023 Thisarani Aloka. All rights reserved.
        </p>

        {/* --- SOCIAL ICONS --- */}
        <div className="footer-social-icons">
          {/* Gmail */}
          <a href="mailto:thisaranialoka7@gmail.com" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <defs>
                <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DF8908" />
                  <stop offset="100%" stopColor="#B415FF" />
                </linearGradient>
              </defs>
              <path
                className="icon-path"
                d="M12 13.065 2.4 6h19.2L12 13.065zm0 2.021L21.6 8.4V18H2.4V8.4L12 15.086z"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/thisarani-aloka-aa74a6310/" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <defs>
                <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DF8908" />
                  <stop offset="100%" stopColor="#B415FF" />
                </linearGradient>
              </defs>
              <path
                className="icon-path"
                d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-1 1.7-2.2 3.5-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4v-8c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V24h-4V8z"
              />
            </svg>
          </a>

          {/* GitHub */}
          <a href="https://github.com/ThisaraniAloka" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <defs>
                <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DF8908" />
                  <stop offset="100%" stopColor="#B415FF" />
                </linearGradient>
              </defs>
              <path
                className="icon-path"
                d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.1-1.3-1.4-1.3-1.4-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1.8 2.4 3.6 1.7v-2.3c-2.6-.6-5.4-1.3-5.4-5.9 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.2 1.2.9-.3 2-.5 3.1-.5s2.2.2 3.1.5c2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.8 1.2 3.1 0 4.6-2.8 5.3-5.4 5.9v2.4c2.8.7 3.6-1.6 3.6-1.6 0-.8.7-1.5.7-1.5.5-1.1 1.3-1.4 1.3-1.4 1-.7-.1-.7-.1-.7z"
              />
            </svg>
          </a>

          {/* CV Download */}
          <a href="/Thisarani_Aloka_CV.pdf" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <defs>
                <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DF8908" />
                  <stop offset="100%" stopColor="#B415FF" />
                </linearGradient>
              </defs>
              <path
                className="icon-path"
                d="M5 20h14v-2H5v2zm7-18-5.5 6h3.5v6h4v-6h3.5L12 2z"
              />
            </svg>
          </a>
        </div>

        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;