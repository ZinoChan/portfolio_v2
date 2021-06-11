import MetaTags from "@components/MetaTags";
import {
  item,
  list,
  slideDown,
  slideToLeft,
  slideUp,
} from "@helpers/animation";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "Html/css",
    "javascript",
    "typescript",
    "reactjs",
    "nextjs",
    "gatsbyjs",
    "redux",
    "firebase",
    "tailwindcss",
    "bootstrap",
    "figma",
  ];
  return (
    <>
      <MetaTags title="About Me" />
      <section className="min-h-screen flex items-center pt-28 overflow-hidden">
        <div className="max-w-screen-lg mx-auto xl:flex xl:justify-between xl:space-x-10 px-2">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideDown}
            className="sm:text-7xl text-5xl font-main font-black uppercase mb-12 xl:mb-0"
          >
            About <br />
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative inline-block w-32  mr-4 h-4 bg-gray-200"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-full w-16 h-4 bg-primary"
              ></motion.span>
            </motion.span>
            Me
          </motion.h1>
          <div>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={slideToLeft}
              custom={0.3}
              className="text-main font-semibold text-lg leading-relaxed text-gray-800 mb-6"
            >
              Hi I'm Zineb ELGUIL, I'm a self taught front-end web developer and
              designer with over 2 years of experience on building web
              application. i like learning new technologies, continue
              challenging myself, and do interesting things that matter.
              <br />
              <br />
              My main experience is in front-end development but I also have a
              passion for design. Given that producing a modern website requires
              the combination of design, server technology, and the layer that
              users interacts with, I believe having experience in both design
              and development allows for making the most optimal user
              experiences.
            </motion.p>
            <motion.h3
              initial="hidden"
              animate="visible"
              variants={slideUp}
              custom={0.3}
              className="text-3xl font-main font-black uppercase mb-6"
            >
              My Skills :
            </motion.h3>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={list}
              className="relative z-20 grid md:grid-cols-3 grid-cols-2 max-w-screen-md gap-4"
            >
              {skills.map((skill, i) => (
                <motion.li
                  variants={item}
                  key={`${skill}-${i}`}
                  className="text-main text-xl text-gray-700"
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
