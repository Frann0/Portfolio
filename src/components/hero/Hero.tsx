import { motion } from 'framer-motion';
import Button from '../shared/button/Button';
import './Hero.scss';

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  const goToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="Hero"
      id="Hero"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className="Hero_Header" variants={childVariants}>
        <motion.h1 className="Hero_Header_Title" variants={childVariants}>
          Hi, I'm Mike Hovedskov
        </motion.h1>
        <motion.div className="Hero_Header_Divider" variants={childVariants} />
        <motion.p className="Hero_Header_Subtitle" variants={childVariants}>
          Web Developer • UI/UX Specialist • Dark Matter Enthusiast
        </motion.p>
      </motion.div>

      <motion.div className="Hero_Buttons" variants={containerVariants}>
        <motion.div variants={childVariants} className="Hero_Buttons_Container">
          <Button text="Projects" onClick={() => goToSection('Projects')} />
        </motion.div>
        <motion.div variants={childVariants} className="Hero_Buttons_Container">
          <Button text="Contact Me" onClick={() => goToSection('Contact')} />
        </motion.div>
        <motion.div variants={childVariants} className="Hero_Buttons_Container">
          <Button text="CV" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

