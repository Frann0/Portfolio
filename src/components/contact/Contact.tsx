import Button from "../shared/button/Button"
import './Contact.scss'

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact_Header">
        <h1 className="Contact_Header_Title">Lets work together</h1>
        <div className="Contact_Header_Divider"></div>
      </div>
      <div className="Contact_Content">
        <p className="Contact_Content_Text">
          I hope I have peeked your interest and that we can work together on projects. Whether just saying hi, or wanting to start at project with my help. Feel free to reach out. Either via the contact form below, via my socials or my email at:
        </p>
        <a href="mailto:mikehovedskov@gmail.com" className="Contact_Content_Email">Mikehovedskov@gmail.com</a>
        <p className="Contact_Content_Freelance">
          I am also available for freelance work.
        </p>
      </div>
      <div className="Contact_Form">
        <input className="Contact_Form_Input" type="text" placeholder="Your Name" />
        <input className="Contact_Form_Input" type="text" placeholder="Your Email" />
        <input className="Contact_Form_Input" type="text" placeholder="Subject" />
        <textarea className="Contact_Form_Textarea" placeholder="Message"></textarea>
        <div className="Contact_Form_Button">
          <Button text="Send Message" icon="icons/Send.svg" />
        </div>
      </div>
    </div>
  )
}

export default Contact
