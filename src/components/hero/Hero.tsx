import Button from '../shared/button/Button';
import './Hero.scss';

const Hero = () => {

  const goToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className='Hero' id='Hero'>
      <div className='Hero_Header'>
        <h1 className='Hero_Header_Title'>Hi, I'm Mike Hovedskov</h1>
        <div className='Hero_Header_Divider'></div>
        <p className='Hero_Header_Subtitle'>Web Developer • UI/UX Specialist • Dark Matter Enthusiast</p>
      </div>
      <div className='Hero_Buttons'>
        <Button text="Projects" onClick={() => goToSection('Projects')} />
        <Button text="Contact Me" onClick={() => goToSection('Contact')} />
        <Button text="CV" />
      </div>
    </div>
  )
}

export default Hero
