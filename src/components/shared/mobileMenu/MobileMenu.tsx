import { motion, AnimatePresence } from 'framer-motion';
import './MobileMenu.scss';

const Menu = ({ isOpen, onClick }: { isOpen: boolean, onClick: (open: boolean) => void }) => {

  const containerVariants = {
    hidden: {
      opacity: 0,
      clipPath: 'inset(0% 0% 100% 0%)',
      backdropFilter: 'blur(0px)',
      transition: {
        when: 'afterChildren',
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      backdropFilter: 'blur(10px)',
      transition: {
        type: 'tween',
        duration: 0.4,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: .5, y: 0 },
  };

  const Click = () => {
    onClick(false);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="menu"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          style={{ overflow: 'hidden' }}
        >
          <motion.a layout className='menu_link' href="#About" onClick={Click} variants={linkVariants}>
            About
          </motion.a>
          <motion.a layout className='menu_link' href="#Projects" onClick={Click} variants={linkVariants}>
            Projects
          </motion.a>
          <motion.a layout className='menu_link' href="#Contact" onClick={Click} variants={linkVariants}>
            Contact
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;

