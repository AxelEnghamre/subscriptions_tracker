"use client";

import { motion, useMotionValue, PanInfo } from "framer-motion";

const Notifications = ({ className, openState }: { className?: string; openState: Boolean }) => {
  return (
    <motion.div
      className={`bg-gradient-to-b from-gradient-top to-gradient-bottom h-[auto] rounded-b-3xl w-full flex-col pr-8 pl-6 ${openState && "pt-10"} fixed gap-8 flex ${className} overflow-hidden`}
      animate={openState ? "open" : "closed"}
      initial={"closed"}
      variants={{
        open: { height: "auto" },
        closed: { height: 0},
      }}
    >
      <ul className="h-full text-logo flex flex-col gap-5">
        <li className="h-10 border-b-2 border-logo">Netflix</li>
        <li className="h-10 border-b-2 border-logo">Amazon Prime</li>
      </ul>

      <div className="flex justify-center items-center pb-5 pt-5">
        <div className="bg-logo w-[43px] h-[4px] rounded"></div>
      </div>
    </motion.div>
  );
};

export default Notifications;
