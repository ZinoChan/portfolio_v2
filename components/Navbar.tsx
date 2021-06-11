import { slideDown } from "@helpers/animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import {
  faAddressCard,
  faCode,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
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
          <img src="/logo.png" className="w-10 h-10 block" alt="logo" />
        </div>

        <ul className="md:flex hidden space-x-6 items-center text-xl font-main capitalize">
          {routes.map((route, index) => (
            <li key={`${route.name}-${index}`}>
              <Link href={route.link}>
                <a>{route.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="block md:hidden relative z-40 self-center ">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <ul
          className={`
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        md:hidden  flex w-16 h-screen top-0 right-0 transform z-30 transition-transform duration-300 ease-in-out  bg-gray-50 fixed justify-center space-y-8 flex-col items-center text-center `}
        >
          {routes.map((route, index) => (
            <li key={`${route.name}-${index}`} onClick={() => setOpen(false)}>
              <Link href={route.link}>
                <a className="hover:text-primary text-gray-400 text-sm font-main capitalize">
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
            <div
              className="absolute top-4 -left-4 w-16 bg-cover h-16"
              style={{ backgroundImage: "url('/shape.svg')" }}
            ></div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
