import styles from "@styles/Home.module.css";
import { motion } from "framer-motion";
import {
  slideUp,
  slideToRight,
  slideToLeft,
  slideDown,
  fadeIn,
} from "@helpers/animation";
import Link from "next/link";
import MetaTags from "@components/MetaTags";
import Shape from "@components/Shape";

const Home = () => {
  return (
    <>
      <MetaTags title="Zineb | Front-end developer" />
      <section className="relative overflow-hidden min-h-screen w-full flex items-center md:pt-0 pt-16 dark:bg-dark-theme">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0.6}
          className="absolute z-20 bottom-0 px-2 xl:hidden font-main uppercase font-black text-gray-300 dark:text-dark-gray   md:text-7xl text-5xl"
        >
          front-end
        </motion.h1>
        <div className="relative max-w-screen-lg px-2 w-full mx-auto">
          <div className="md:grid md:grid-cols-auto-2 md:grid-rows-auto-2 xl:gap-0 gap-4">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={slideToLeft}
              custom={0.3}
              className="md:text-7xl text-4xl md:leading-normal dark:text-gray-100  font-black font-main text-black uppercase"
            >
              Front-End <br /> developer
            </motion.h1>
            <div className="md:space-x-16 justify-center items-center md:flex">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideDown}
                className="md:w-0.5  md:h-52 h-0.5 w-52 my-6 bg-gray-300 dark:bg-gray-300"
              ></motion.div>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={slideToRight}
                custom={0.3}
                className="md:text-2xl text-lg dark:text-gray-300 text-gray-700   font-lora  capitalize"
              >
                Front-end <br />
                react js developer <br /> based in Morocco.
              </motion.p>
            </div>
            <Link href="/work">
              <motion.button
                initial="hidden"
                animate="visible"
                variants={slideUp}
                whileTap={{ scale: 0.9 }}
                custom={0.6}
                className={`${styles.btn} focus:outline-none  mt-8 place-self-start relative self-start align-start px-6 py-2 font-semibold text-md font-main capitalize rounded bg-primary`}
              >
                <a>view work</a>
              </motion.button>
            </Link>
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUp}
          custom={0.6}
          className="absolute -bottom-10 xl:left-12 right-0 w-20 bg-cover h-20 dark:filter  dark:invert"
        >
          <Shape />
        </motion.div>
      </section>
    </>
  );
};

export default Home;
