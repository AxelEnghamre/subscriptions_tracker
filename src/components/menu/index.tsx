"use client";

import ThemeButton from "../UI/buttons/ThemeButton";
import { motion, useDragControls } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const Menu = () => {
    const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(true);
  const controls = useDragControls();
  

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
        className={`fixed bottom-0 left-0 w-screen h-24 grid place-items-center duration-300 z-40 ${
          menuOpen ? "rounded-none bg-transparent" : "rounded-t-3xl bg-menu"
        }`}
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
      <nav
        className={`fixed left-0 bottom-0 w-screen h-4/5 bg-gradient-to-t from-menu to-off-white rounded-t-3xl duration-300 ${
          menuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <ul>
          <li>
            <button onClick={signOut}>Logga ut</button>
          </li>
        </ul>
        <ThemeButton />
      </nav>
    </>
  );
};

export default Menu;

{
  /* <motion.nav
      className={`fixed left-0 bottom-0 w-full ${
        menuOpen ? "h-3/5 bg-gradient-to-t from-menu to-off-white" : " h-24 bg-menu"
      }`}
      drag="y"
    >
      {menuOpen ? (
        <>
          <ThemeButton />
        </>
      ) : (
        <></>
      )}
    </motion.nav> */
}
