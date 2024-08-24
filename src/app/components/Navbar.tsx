import { useEffect, useState } from "react";
import Button from "./Button";
import Forwadin from "../assets/Forwardin";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { getTheme, toggleTheme } from "@/lib/theme";
import { Theme } from "@/lib/types";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const openAndCloseMenu = () => setMenuOpen(!isMenuOpen);

  const [theme, setTheme] = useState(Theme.Light);
  const [themeClickable, setThemeClickable] = useState(false);

  useEffect(() => {
    setTheme(getTheme());
    setThemeClickable(true);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTheme = () => {
    if (!themeClickable) {
      return;
    }
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
    toggleTheme({ theme: theme === Theme.Light ? Theme.Dark : Theme.Light });
  };

  return (
    <>
      <nav className="fixed lg:max-w-[900px] py-2 lg:py-4 bg-white mx-auto px-8 lg:shadow-lg rounded-none lg:rounded-xl left-0 right-0 top-0 lg:top-[30px] z-20 dark:backdrop-blur-sm dark:bg-white/60">
        <div className="w-full flex lg:flex-row flex-col justify-between lg:items-center gap-4 lg:gap-0 relative">
          <div className="flex flex-row justify-between items-center">
            <Forwadin className="text-black my-4 lg:my-0 " />
            <div className="flex gap-4 lg:hidden">
              <button onClick={handleTheme}>
                {theme === Theme.Dark ? (
                  <FaSun className="text-black text-2xl" />
                ) : (
                  <FaMoon className="text-black text-xl" />
                )}
              </button>
              <button
                className="h-fit p-2 flex items-center justify-center"
                onClick={openAndCloseMenu}
              >
                <FaBars className="text-primary text-lg dark:text-on-dark" />
              </button>
            </div>
          </div>

          <div className="hidden lg:static lg:flex flex-col lg:flex-row justify-between items-start lg:items-center h-fit gap-4 lg:gap-0 w-full">
            <ul className="flex gap-4 flex-col lg:flex-row  h-fit justify-center lg:mx-auto">
              <li>
                <a
                  href="#"
                  className="text-black hover:text-primary transition-all duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  Demo
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  Blog
                </a>
              </li>
            </ul>
            <div className="flex gap-5">
              <button onClick={handleTheme}>
                {theme === Theme.Dark ? (
                  <FaSun className="text-black text-2xl" />
                ) : (
                  <FaMoon className="text-black text-xl" />
                )}
              </button>
              <Link href={"/login"}>
                <Button className="btn-primary px-8">Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed left-0 ${
          isMenuOpen ? "top-[5.2rem]" : "-top-96"
        } transition-all duration-300 right-0 bg-white dark:backdrop-blur-sm dark:bg-white/60 w-full lg:hidden shadow-lg z-10`}
      >
        <div className="flex flex-col justify-between gap-7 px-8 py-8">
          <ul className="flex gap-5 flex-col lg:flex-row  h-fit justify-center items-center lg:mx-auto font-semibold">
            <li>
              <a
                href="#"
                className="text-black hover:text-primary transition-all duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Demo
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Blog
              </a>
            </li>
          </ul>
          <Button className="btn-primary px-8">Sign In</Button>
        </div>
      </div>
    </>
  );
}
