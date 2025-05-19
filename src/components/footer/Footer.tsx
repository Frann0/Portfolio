import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="Footer">
      <div className="Footer_Content">
        <p className="Footer_Content_Text">© {currentYear} Mike Handberg Hovedskov • All rights reserved.</p>
      </div>
      <div className="Footer_Socials">
        <a href="https://www.linkedin.com/in/mikehovedskov/" target="_blank" rel="noopener noreferrer">
          <img src="icons/LinkedIn.svg" alt="LinkedIn" />
        </a>
        <a href="https://www.github.com/frann0" target="_blank" rel="noopener noreferrer">
          <img src="icons/Github.svg" alt="GitHub" />
        </a>
      </div>
    </div>
  )
}

export default Footer
