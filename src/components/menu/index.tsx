"use client";

import ThemeButton from "../UI/buttons/ThemeButton";
import { motion, useMotionValue, PanInfo } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Profile from "./Profile";
import Segment from "./Segment";
import Settings from "./Settings";

const Menu = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const positionY = useMotionValue(0);
  const [segment, setSegment] = useState("");

  const closeMenu = () => {
    setIsDragging(false);
    setMenuOpen(false);
    positionY.destroy();
    setSegment("");
  };

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    positionY.set(info.point.y);

    // On dragging down
    if (info.offset.y > 0) {
      // To ensure hard drag
      if (info.delta.y > 15) {
        closeMenu();
      }
    }
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      setMenuOpen(true);
    }
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
          <div className="w-5 h-5 rounded-full bg-logo" />
          <div className="w-5 h-5 rounded-full bg-logo" />
          <div className="w-5 h-5 rounded-full bg-logo" />
          <div className="w-5 h-5 rounded-full bg-logo" />
        </button>
      </div>

      {/* MENU */}
      <motion.nav
        className={`fixed left-0 bottom-0 w-screen h-4/5 bg-menu rounded-t-3xl`}
        animate={menuOpen ? "open" : "closed"}
        initial={"closed"}
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
          className={`mx-auto w-20 h-12 overflow-hidden touch-pan-y hover:cursor-pointer`}
        >
          <motion.div
            className={`w-10 mt-5 border-2 mx-auto rounded-full border-logo ${
              menuOpen ? "block" : "hidden"
            }`}
          />
        </motion.div>

        <motion.div
          className="relative h-4/5 w-full overflow-hidden"
          animate={menuOpen ? "open" : "closed"}
          initial={"closed"}
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 0 },
          }}
        >
          <motion.div
            className="h-full w-fit flex flex-row"
            animate={segment === "" ? "mainMenu" : "segments"}
            initial={"mainMenu"}
            variants={{
              mainMenu: { x: 0 },
              segments: { x: "-50%" },
            }}
          >
            <ul className="w-screen h-full px-10 text-logo flex flex-col gap-5">
              <li className="h-10 border-b-2 border-logo">
                <button onClick={() => setSegment("profile")}>Profil</button>
              </li>
              <li className="h-10 border-b-2 border-logo">
                <button onClick={() => setSegment("settings")}>
                  Inställningar
                </button>
              </li>
              <li className="h-10 border-b-2 border-logo">
                <button onClick={() => {}}>Hjälp</button>
              </li>
              <li className="h-10 border-b-2 border-logo">
                <button onClick={signOut}>Logga ut</button>
              </li>
              <li className="h-10 flex flex-col justify-end">
                <ThemeButton />
              </li>
            </ul>

            <div className="w-screen h-full px-10">
              <Segment name="profile" segment={segment} setSegment={setSegment}>
                <Profile />
              </Segment>
              <Segment
                name="settings"
                segment={segment}
                setSegment={setSegment}
              >
                <Settings />
              </Segment>
            </div>
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 translate-y-full bg-menu" />
      </motion.nav>
    </>
  );
};

export default Menu;

{
  /* <motion.div
          animate={menuOpen ? "open" : "closed"}
          initial={"closed"}
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 0 },
          }}
          className="relative w-screen h-4/5 bg-red-400 overflow-hidden"
        >
          <div className="min-w-full h-full bg-green-400 px-10 flex flex-row">
            <motion.ul className="flex flex-col gap-5">
              <li className="h-10">
                <button onClick={() => setSegment("profile")}>Profil</button>
              </li>
              <li className="h-10">
                <button onClick={() => {}}>Inställningar</button>
              </li>
              <li className="h-10">
                <button onClick={() => {}}>Hjälp</button>
              </li>
              <li className="h-10">
                <button onClick={signOut}>Logga ut</button>
              </li>
              <li className="h-10 flex flex-col justify-end">
                <ThemeButton />
              </li>
            </motion.ul>

            {/* SEGMENTS 
            <div className={`relative ${segment}`}>
              <Profile name="profile" segment={segment} setSegment={setSegment} />
            </div>
          </div>
        </motion.div> */
}
