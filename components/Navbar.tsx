import { slideDown } from "@helpers/animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import {
  faAddressCard,
  faCode,
  faEnvelope,
  faHome,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Logo";
import Shape from "./Shape";

const Navbar = ({ setDarkTheme, isDarkTheme }) => {
  const routes = [
    { link: "/", name: "home", icon: faHome },
    { link: "/work", name: "work", icon: faCode },
    { link: "/about", name: "about", icon: faAddressCard },
    { link: "/contact", name: "contact", icon: faEnvelope },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={slideDown}
      custom={1.2}
      className="w-full z-20 absolute top-0 left-0 overflow-hidden md:py-6 py-2"
    >
      <nav className="flex px-2 items-center  justify-between w-full max-w-screen-xl mx-auto">
        <div className=" self-center">
          <Logo />
        </div>

        <ul className="md:flex hidden space-x-6 items-center text-xl font-main capitalize">
          {routes.map((route, index) => (
            <li key={`${route.name}-${index}`} className="dark:text-gray-100">
              <Link href={route.link}>
                <a>{route.name}</a>
              </Link>
            </li>
          ))}
          <button
            className={`focus:outline-none w-5 h-5 ${
              isDarkTheme && "text-white"
            }`}
            onClick={() => setDarkTheme(!isDarkTheme)}
          >
            <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
          </button>
        </ul>
        <div className="flex items-center md:hidden relative z-40 self-center ">
          <button
            className={`focus:outline-none w-5 h-5 mr-2 ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
            onClick={() => setDarkTheme(!isDarkTheme)}
          >
            <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
          </button>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color={`${isDarkTheme ? "#06fbce" : "#000"}`}
          />
        </div>
        <ul
          className={`
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        md:hidden  flex w-16 h-screen top-0 right-0 transform z-30 transition-transform duration-300 ease-in-out  bg-gray-50  dark:bg-dark-gray fixed justify-center space-y-8 flex-col items-center text-center `}
        >
          {routes.map((route, index) => (
            <li key={`${route.name}-${index}`} onClick={() => setOpen(false)}>
              <Link href={route.link}>
                <a className="hover:text-primary text-gray-400 dark:text-gray-300 text-sm font-main capitalize">
                  <span className="block mb-2 w-8 h-8 mx-auto text-xl">
                    <FontAwesomeIcon icon={route.icon} />
                  </span>
                  <span className="text-sm">{route.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:block hidden">
          <div className="absolute w-16 h-16 bg-primary right-0 top-0">
            <div className="absolute top-4 -left-4 w-16 bg-cover h-16">
              <Shape />
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
