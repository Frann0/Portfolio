import './navbar.scss'

const Navbar = () => {
  return (
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
  )
}

export default Navbar 
