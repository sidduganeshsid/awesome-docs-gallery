"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = ({ }) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="p-4 bg-white dark:bg-neutral-800 border-t border-neutral-100 dark:border-neutral-800 mt-32 text-center"
    >
      An open-source project by{" "}
      <a href="https://hashnode.com/products/docs" className="font-bold">Hashnode for Docs</a>.
    </motion.footer>
  );
};

export default Footer;
