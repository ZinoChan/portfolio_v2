import { slideDown } from "@helpers/animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const routes = [
    { link: "/", name: "home" },
    { link: "/work", name: "work" },
    { link: "/about", name: "about" },
    { link: "/contact", name: "contact" },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={slideDown}
      custom={1.2}
      className="w-full z-20 absolute top-0 left-0 overflow-hidden py-6"
    >
      <nav className="flex px-4 items-center justify-between w-full max-w-screen-xl mx-auto">
        <div className="block md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="text-2xl self-center">Logo</div>
        <ul className="md:flex hidden space-x-6 items-center text-xl font-main capitalize">
          {routes.map((route, index) => (
            <li key={`${route.name}-${index}`}>
              <Link href={route.link}>
                <a>{route.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div>
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
