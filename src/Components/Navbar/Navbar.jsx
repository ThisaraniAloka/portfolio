import React, { useEffect, useState } from 'react';
import './Navbar.css';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  // Disable body scroll when menu open
  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(v => !v);

  // Smooth scroll handler
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActive(id);
    setIsOpen(false);

    const el = document.getElementById(id);
    const offset = 70;
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar" role="navigation" aria-label="Main navigation">
      <p className='logo'>Thisarani Aloka</p>

      {/* Mobile toggle button */}
      <button
        className="nav-mob-toggle"
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <img src={isOpen ? menu_close : menu_open} alt="" />
      </button>

      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          {links.map(l => (
            <li key={l.id} className={active === l.id ? 'active' : ''}>
              <a
                className="nav-link"
                href={`#${l.id}`}
                onClick={(e) => handleNavClick(e, l.id)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav-connect">
        <a className="anchor-cta" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
          Connect With Me
        </a>
      </div>
    </header>
  );
};

export default Navbar;
