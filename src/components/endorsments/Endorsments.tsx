import './Endorsment.scss'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    }
  }
};

const childVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5 }
  },
  focus: {
    filter: 'saturate(1)',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  hover: {
    filter: 'saturate(1)',
    transition: { duration: 0.3, ease: 'easeInOut' },
  }
};

const Endorsment = () => {
  return (
    <motion.div
      className='Endorsment'
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {[
        'EUC.png',
        'DanskScanning.png',
        '2Doit.png',
        'EliteIt.png',
        'RegionalIT.png',
        'Easyselfie.png'
      ].map((src, idx) => (
        <motion.img
          key={idx}
          variants={childVariants}
          src={`images/${src}`}
          className="Endorsment_Company"
          whileFocus='focus'
          whileHover='hover'
          alt={`${src.split('.')[0]} Logo`}
        />
      ))}
    </motion.div>
  )
};

export default Endorsment;
