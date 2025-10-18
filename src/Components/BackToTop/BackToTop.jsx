
import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FiChevronsUp } from 'react-icons/fi';
import './BackToTop.css';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight * 0.5) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {visible && (
        <AnchorLink href="#top" className="back-to-top">
          <FiChevronsUp className="back-to-top-icon" />
        </AnchorLink>
      )}
    </>
  );
};

export default BackToTop;
