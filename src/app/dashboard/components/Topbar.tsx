import Button from "@/app/components/Button";
import { Theme } from "@/lib/types";
import { useState } from "react";
import { FaBars, FaBell, FaMoon, FaSun, FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

export default function Topbar({
  toggleSidebar,
  signOut,
  username,
  darkMode,
  toogleDarkMode
}: {
  toggleSidebar: () => void;
  signOut: () => void;
  username?: string;
  toogleDarkMode: () => void;
  darkMode: Theme;
}) {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const openAndCloseProfileMenu = () => setProfileMenuOpen(!isProfileMenuOpen);
  return (
    <header className="w-full">
      <div className="flex items-center justify-between text-end relative">
        <div>
          <Button
            className="rounded-full h-10 w-10 p-0"
            onClick={toggleSidebar}
          >
            <div className="flex h-full w-full items-center justify-center">
              <FaBars />
            </div>
          </Button>
        </div>
        <div className="flex items-center">
          <Button className="rounded-full h-10 w-10 p-0 mr-4 hidden lg:inline" onClick={toogleDarkMode}>
            <div className="flex h-full w-full items-center justify-center">
              {
                darkMode === Theme.Dark ? (
                  <FaSun />
                ) : (
                  <FaMoon />
                )
              }
            </div>
          </Button>
          <Button className="rounded-full h-10 w-10 p-0 mr-4 hidden lg:inline">
            <div className="flex h-full w-full items-center justify-center">
              <FaBell />
            </div>
          </Button>
          <div className="bg-gray-100 dark:bg-dark inline-block rounded-full h-10 w-fit p-0 pr-1 py-1 mr-4 relative">
            <div
              className="flex h-full w-full items-center justify-center gap-9 pl-16 hover:cursor-pointer"
              onClick={openAndCloseProfileMenu}
            >
              <p>{username ?? "-"}</p>
              <div className="p-2 bg-primary rounded-full">
                <FaUser className="text-white" />
              </div>
            </div>
            {isProfileMenuOpen && (
              <div className="absolute p-4 rounded-xl bg-white dark:bg-dark shadow-xl top-10 right-0 w-full">
                <ul className="flex flex-col gap-2 z-[25]">
                  <li>
                    <button
                      onClick={signOut}
                      className="text-danger block py-2 px-4"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Button className="rounded-full h-10 w-10 p-0 hidden lg:inline">
            <div className="flex h-full w-full items-center justify-center">
              <IoSettingsSharp />
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
