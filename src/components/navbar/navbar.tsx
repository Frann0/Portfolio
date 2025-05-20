import { useEffect, useState } from 'react';
import './navbar.scss'
import Hamburger from '../shared/hamburger/Hamburger';
import Menu from '../shared/mobileMenu/MobileMenu';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      console.log(progress);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', updateScrollProgress);

    // Initial checks
    handleResize();
    updateScrollProgress();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  const openHamburger = (t: boolean) => {
    setIsOpen(t);
  }

  return (
    <>
      {!isMobile && (
        <>
          <nav className="navbar">
            <div className="navbar_logo">
              <img src="icons/Planet.svg" className="navbar_logo_icon" alt="Logo" />
              <p className="navbar_logo_text">Mike Hovedskov</p>
            </div>
            <div className="navbar_links">
              <a href="#About" className="navbar_links_link">
                About Me
              </a>
              <a href="#Projects" className="navbar_links_link">
                Projects
              </a>
              <a href="#Contact" className="navbar_links_link">
                Contact
              </a>
            </div>
          </nav>
        </>
      )}
      {isMobile && (
        <>
          <nav className="navbar">
            <div className="navbar_logo">
              <img src="icons/Planet.svg" className="navbar_logo_icon" alt="Logo" />
            </div>
            <div className="navbar_hamburger">
              <Hamburger isOpen={isOpen} onClick={(t) => openHamburger(t)} />
            </div>
          </nav>
          <Menu isOpen={isOpen} onClick={(open) => openHamburger(open)} />
        </>
      )}

      <div className="Navbar_Progress" style={{ width: `${scrollProgress}%` }}></div>
    </>
  )
}

export default Navbar 
