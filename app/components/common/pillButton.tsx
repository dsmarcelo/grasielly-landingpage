import React from 'react';
import { motion } from "framer-motion"

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PillButton = ({
  children,
  className,
  ...props
}: Props) => {
  return (
    <motion.button
      className={`rounded-full h-16 px-6 py-3 bg-tertiary text-black flex items-center gap-3 justify-between hover:bg-tertiary-lighter transition-colors ${className}`}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default PillButton;
