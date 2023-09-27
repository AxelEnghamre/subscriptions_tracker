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
        <div className="h-full w-[162px]">
          <img src="/BILL.gif" alt="" />
        </div>
        <div className="h-full w-[40px]">
          <img src="/Bill_dots.gif" alt="" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RootLoading;
