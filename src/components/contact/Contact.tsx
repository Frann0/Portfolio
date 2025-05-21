import Button from "../shared/button/Button"
import './Contact.scss'
import { motion } from "framer-motion"

const containerVariants = {
  hidden: {

  },
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }

  }
}

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const formVariants = {
  hidden: {
    height: 0,
    opacity: 0,

  },
  show: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
}

const inputVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    }
  },

  hover: {
    border: '1px solid #ffffff80',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  focus: {
    border: '1px solid #ffffff80',
    transition: { duration: 0.3, ease: 'easeInOut' },
  }
}

const dividerVariants = {
  hidden: {
    width: 0,
  },
  show: {
    width: '100%',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    }
  }
}

const Contact = () => {
  return (
    <motion.div
      className="Contact"
      id='Contact'
      variants={containerVariants}
      initial="hidden"
      whileInView='show'
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="Contact_Header">
        <motion.h1 className="Contact_Header_Title">Lets work together</motion.h1>
        <motion.div variants={dividerVariants} className="Contact_Header_Divider"></motion.div>
      </div>
      <div className="Contact_Content">
        <motion.p variants={textVariants} className="Contact_Content_Text">
          I hope I have peeked your interest and that we can work together on projects. Whether just saying hi, or wanting to start at project with my help. Feel free to reach out. Either via the contact form below, via my socials or my email at:
        </motion.p>
        <motion.a variants={textVariants} href="mailto:mikehovedskov@gmail.com" className="Contact_Content_Email">Mikehovedskov@gmail.com</motion.a>
        <motion.p variants={textVariants} className="Contact_Content_Freelance">
          I am also available for freelance work.
        </motion.p>
      </div>
      <motion.div className="Contact_Form"
        variants={formVariants}
        initial="hidden"
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.input variants={inputVariants} whileFocus='focus' whileHover='hover' className="Contact_Form_Input" type="text" placeholder="Your Name" />
        <motion.input variants={inputVariants} whileFocus='focus' whileHover='hover' className="Contact_Form_Input" type="text" placeholder="Your Email" />
        <motion.input variants={inputVariants} whileFocus='focus' whileHover='hover' className="Contact_Form_Input" type="text" placeholder="Subject" />
        <motion.textarea variants={inputVariants} whileFocus='focus' whileHover='hover' className="Contact_Form_Textarea" placeholder="Message"></motion.textarea>
        <motion.div variants={inputVariants} whileFocus='focus' whileHover='hover' className="Contact_Form_Button">
          <Button text="Send Message" icon="icons/Send.svg" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Contact
