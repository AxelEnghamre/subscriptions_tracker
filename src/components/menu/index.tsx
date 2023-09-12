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

  const closeMenu = () => {
    setIsDragging(false);
    setMenuOpen(false);
    positionY.destroy();
  };

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
        closeMenu();
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
          drag="y"
          onDrag={handleDrag}
          dragConstraints={{ top: 10, bottom: 10 }}
          dragSnapToOrigin
          className={`mx-auto w-20 h-12 overflow-hidden touch-pan-y hover:cursor-pointer `}
        >
          <motion.div
            className={`w-10 mt-5 border-2 mx-auto rounded-full ${
              menuOpen ? "block" : "hidden"
            }`}
          />
        </motion.div>

        <motion.ul
          className="mx-10 flex flex-col gap-5"
          animate={menuOpen ? "open" : "closed"}
          initial={"closed"}
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 0 },
          }}
        >
          <li className="h-10">
            <button onClick={signOut}>Logga ut</button>
          </li>
          <li className="h-10 flex flex-col justify-end">
            <ThemeButton />
          </li>
        </motion.ul>
        <div className="w-full h-screen absolute left-0 top-full bg-menu" />
      </motion.nav>
    </>
  );
};

export default Menu;
