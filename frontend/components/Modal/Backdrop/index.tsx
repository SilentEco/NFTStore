import { motion } from "framer-motion";
import React from "react";

interface BackdropTypes {
  children: React.ReactNode;
  onClick: () => void;
}

const Backdrop = ({ children, onClick }: BackdropTypes) => {
  return (
    <motion.div
      className={"backdrop"}
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
