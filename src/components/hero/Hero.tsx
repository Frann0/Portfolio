import Button from '../shared/button/Button';
import './Hero.scss';

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='Hero_Header'>
        <h1 className='Hero_Header_Title'>Hi, I'm Mike Hovedskov</h1>
        <div className='Hero_Header_Divider'></div>
        <p className='Hero_Header_Subtitle'>Web Developer • UI/UX Specialist • Dark Matter Enthusiast</p>
      </div>
      <div className='Hero_Buttons'>
        <Button text="Projects" />
        <Button text="Contact Me" />
        <Button text="CV" />
      </div>
    </div>
  )
}

export default Hero
