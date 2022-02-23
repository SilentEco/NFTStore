import { motion } from "framer-motion";
import React from "react";
import styles from "../Modal.module.scss";

interface BackdropTypes {
  children: React.ReactNode;
  onClick: () => void;
}

const Backdrop = ({ children, onClick }: BackdropTypes) => {
  return (
    <motion.div
      className={styles.backdrop}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
export default Backdrop;
