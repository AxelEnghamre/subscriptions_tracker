"use client";

import { motion, AnimatePresence } from "framer-motion";

const RootLoading = () => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        className="w-screen h-screen bg-bill text-white"
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
