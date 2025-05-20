// About.tsx
import { motion } from 'framer-motion';
import Button from '../shared/button/Button';
import './About.scss';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const About = () => {
  return (
    <motion.div
      className='About'
      id='About'
      variants={containerVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className='About_Header'>
        <motion.h1 className='About_Header_Text' variants={textVariants}>About Me</motion.h1>
        <motion.div className='About_Header_Divider' variants={textVariants}></motion.div>
      </div>

      <motion.div variants={containerVariants} initial="hidden" whileInView='show' viewport={{ once: true, amount: 0.3 }} className='About_Content'>
        <motion.div className='About_Content_Text' variants={textVariants}>
          <motion.p className='About_Content_Text_Description' variants={textVariants}>
            {/* Replace with improved version or keep as-is */}
            UI/UX design is the process of creating interfaces that are both aesthetically pleasing and easy to use. Front-end developers are not typically responsible for the design of user interfaces, but understanding how to create a user interface that is both user-friendly and visually appealing can be beneficial to their development work. There are a number of factors that go into creating a user interface that is both user-friendly and visually appealing. UX designers need to understand the user's needs and want and be able to think about how users will interact with the interface, and what features will be most useful to them.
            <br />
            <br />
            <br />

            I'm Mike Hovedskov, a passionate web application designer and developer with a focus on UI/UX Design. I specialize in creating visually stunning front-end web applications, all with my unique perspective on UI/UX Design. I have expertise in mock-ups, photo editing, image cropping, photo manipulation, and other graphic design services. I have just concluded my bachelors degree in web development, with ~ 10 average grade. I have been around computers my whole life and always had a curiosity for technical work. My love for programming and clean, elegant design has helped me become a professional and interactive website developer. I'm always looking to further my knowledge and utilize the latest and greatest tools available.
          </motion.p>

          <motion.h2 className='About_Content_Text_Title' variants={textVariants}>
            How I Work
          </motion.h2>

          <motion.p className='About_Content_Text_Description' variants={textVariants}>
            {/* Your working style */}
            When starting a new project, it is important to gather as much relevant information as possible. This includes understanding the customer's goals, demographics, preferences, and visual inspirations. Researching the industry and competitors is also essential, as it provides context for the project and helps to identify areas of opportunity. After gathering the necessary information, I typically conceptualize the application's layout and create a prototype in a design application such as Figma or Adobe XD. Then, I move on to visual design, using tools such as Photoshop and Figma. Finally, I utilize HTML, CSS, and JavaScript to translate the design into code, while maintaining best practices with whatever framework is used.
          </motion.p>

          <motion.div className='About_Content_Text_Button' variants={textVariants}>
            <Button text="Download CV" />
          </motion.div>
        </motion.div>

        <motion.div className='About_Content_Image' variants={imageVariants}>
          <motion.div
            className='About_Content_Image_Image'
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px #EAE8F0' }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img
              src='images/EliteIt.png'
              className='About_Content_Image_Image_Logo'
              alt='EliteIT Logo'
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className='About_Divider' variants={textVariants}></motion.div>
    </motion.div>
  );
};

export default About;
