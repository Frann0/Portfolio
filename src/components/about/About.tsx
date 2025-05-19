import Button from '../shared/button/Button'
import './About.scss'

const About = () => {
  return (
    <div className='About' id='About'>
      <div className='About_Header'>
        <h1 className='About_Header_Text'>About Me</h1>
        <div className='About_Header_Divider'></div>
      </div>
      <div className='About_Content'>
        <div className='About_Content_Text'>
          <p className='About_Content_Text_Description'>
            UI/UX design is the process of creating interfaces that are both aesthetically pleasing and easy to use. Front-end developers are not typically responsible for the design of user interfaces, but understanding how to create a user interface that is both user-friendly and visually appealing can be beneficial to their development work. There are a number of factors that go into creating a user interface that is both user-friendly and visually appealing. UX designers need to understand the user's needs and want and be able to think about how users will interact with the interface, and what features will be most useful to them.
            <br />
            <br />
            <br />

            I'm Mike Hovedskov, a passionate web application designer and developer with a focus on UI/UX Design. I specialize in creating visually stunning front-end web applications, all with my unique perspective on UI/UX Design. I have expertise in mock-ups, photo editing, image cropping, photo manipulation, and other graphic design services. I have just concluded my bachelors degree in web development, with ~ 10 average grade. I have been around computers my whole life and always had a curiosity for technical work. My love for programming and clean, elegant design has helped me become a professional and interactive website developer. I'm always looking to further my knowledge and utilize the latest and greatest tools available.
          </p>
          <h2 className='About_Content_Text_Title'>How i work</h2>
          <p className='About_Content_Text_Description' >When starting a new project, it is important to gather as much relevant information as possible. This includes understanding the customer's goals, demographics, preferences, and visual inspirations. Researching the industry and competitors is also essential, as it provides context for the project and helps to identify areas of opportunity. After gathering the necessary information, I typically conceptualize the application's layout and create a prototype in a design application such as Figma or Adobe XD. Then, I move on to visual design, using tools such as Photoshop and Figma. Finally, I utilize HTML, CSS, and JavaScript to translate the design into code, while maintaining best practices with whatever framework is used.</p>
          <div className='About_Content_Text_Button'>
            <Button text="Download CV" />
          </div>
        </div>
        <div className='About_Content_Image'>
          <div className='About_Content_Image_Image'>
            <img src="images/EliteIt.png" className="About_Content_Image_Image_Logo" alt="2Doit Logo" />
          </div>
        </div>
      </div>
      <div className='About_Divider'></div>
    </div>
  )
}

export default About
