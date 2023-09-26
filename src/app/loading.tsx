"use client";

import { motion, AnimatePresence } from "framer-motion";

const RootLoading = () => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        className="w-screen h-screen bg-gradient-to-b from-loading-gradient-top to-loading-gradient-bottom text-white flex flex-col justify-center items-center"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        loading
      </motion.div>
    </AnimatePresence>
  );
};

export default RootLoading;
