"use client";

import ThemeButton from "../UI/buttons/ThemeButton";
import { motion, useMotionValue, PanInfo } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const Menu = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const positionY = useMotionValue(0);

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    positionY.set(info.point.y);

    // On dragging down
    if (info.offset.y > 0) {
      console.log("down");

      // To ensure hard drag
      if (info.delta.y > 15) {
        setIsDragging(false);
        setMenuOpen(false);
        positionY.destroy();
      }
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const signOut = async () => {
    fetch("/api/auth/sign-out", {
      method: "POST",
    });
    router.push("/sign-in");
  };

  return (
    <>
      {/* MAIN MENU TOGGLE BUTTON */}
      <div
        className={`fixed bottom-0 left-0 w-screen h-24 grid place-items-center z-40`}
      >
        <button
          className="w-12 h-12 flex flex-row justify-start gap-2 flex-wrap"
          onClick={toggleMenu}
        >
          <div className="w-5 h-5 rounded-full bg-bill" />
          <div className="w-5 h-5 rounded-full bg-bill" />
          <div className="w-5 h-5 rounded-full bg-bill" />
          <div className="w-5 h-5 rounded-full bg-bill" />
        </button>
      </div>

      {/* MENU */}
      <motion.nav
        className="fixed left-0 bottom-0 w-screen h-4/5 bg-menu rounded-t-3xl"
        animate={menuOpen ? "open" : "closed"}
        initial={"closed"}
        // transition={{ type: "spring", stiffness: 10, damping: 6 }}
        variants={{
          open: { y: "0%" },
          closed: { y: "calc(100% - 6rem)" },
        }}
        drag={isDragging ? "y" : false}
        dragConstraints={{ top: 20, bottom: 20 }}
        dragElastic={10}
        dragSnapToOrigin
        onDrag={handleDrag}
      >
        <motion.div
          onHoverStart={() => setIsDragging(true)}
          onHoverEnd={() => setIsDragging(false)}
          className={`mx-auto w-20 h-12 overflow-hidden touch-pan-y hover:cursor-pointer `}
        >
          <div
            className={`w-10 mt-5 border-2 mx-auto ${
              menuOpen ? "block" : "hidden"
            }`}
          />
        </motion.div>

        <ul className=" mt-28">
          <li>
            <button onClick={signOut}>Logga ut</button>
          </li>
        </ul>
        <ThemeButton />
        <div className="w-full h-screen absolute left-0 top-full bg-menu" />
      </motion.nav>
    </>
  );
};

export default Menu;
