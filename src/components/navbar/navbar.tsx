import { useEffect, useState } from 'react';
import './navbar.scss'

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    })

    window.addEventListener("scroll", updateScrollProgress);
    return () => {
      window.removeEventListener('resize', () => {
        setIsMobile(false)
      });
      window.removeEventListener("scroll", updateScrollProgress);
    }
  }, []);

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
              <a href="#about" className="navbar_links_link">
                About Me
              </a>
              <a href="#projects" className="navbar_links_link">
                Projects
              </a>
              <a href="#contact" className="navbar_links_link">
                Contact
              </a>
            </div>
          </nav>
          <div className="Navbar_Progress" style={{ width: `${scrollProgress}%` }}></div>
        </>
      )}
      {isMobile && (
        <>
          <nav className="navbar">
            <div className="navbar_logo">
              <img src="icons/Planet.svg" className="navbar_logo_icon" alt="Logo" />
            </div>

          </nav>
          <div className="Navbar_Progress" style={{ width: `${scrollProgress}%` }}></div>
        </>


      )}
    </>
  )
}

export default Navbar 
