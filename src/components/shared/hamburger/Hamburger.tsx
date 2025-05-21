import { motion } from "framer-motion";
import './Hamburger.scss'

export default function Hamburger({ isOpen, onClick }: { isOpen: boolean, onClick: (isOpen: boolean) => void }) {

  const variantTop = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  };

  const variantMiddle = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const variantBottom = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  };

  const click = () => {
    onClick(!isOpen);
  }

  return (
    <button onClick={() => click()} className="Hamburger">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <motion.rect
          width="24"
          height="2"
          rx="1"
          y="4"
          fill="#ffffff80"
          variants={variantTop}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
        />
        <motion.rect
          width="24"
          height="2"
          rx="1"
          fill="#ffffff80"
          y="12"
          variants={variantMiddle}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
        />
        <motion.rect
          width="24"
          height="2"
          rx="1"
          fill="#ffffff80"
          y="20"
          variants={variantBottom}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
        />
      </svg>
    </button>
  );
}
