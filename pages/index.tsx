import styles from "@styles/Home.module.css";
import { motion } from "framer-motion";
import {
  slideUp,
  slideToRight,
  slideToLeft,
  slideDown,
  fadeIn,
} from "@helpers/animation";

const Home = () => {
  return (
    <section className="relative overflow-hidden min-h-screen w-full flex items-center md:pt-0 pt-20">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={0.6}
        className="absolute bottom-20 left-4 xl:top-1/2 xl:transform  xl:-rotate-90 min-w-max xl:-left-16 xl:-translate-y-1/2 font-main uppercase font-black text-gray-100 md:text-7xl text-5xl"
      >
        front-end
      </motion.h1>
      <div className="relative max-w-screen-lg px-4 w-full mx-auto">
        <div className="md:grid md:grid-cols-auto-2 md:grid-rows-auto-2 xl:gap-0 gap-4">
          <div className="md:space-x-16 justify-center items-end md:flex">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={slideToRight}
              custom={0.3}
              className="md:text-2xl text-lg text-gray-700 md:mb-8 font-lora  capitalize"
            >
              reactjs <br />
              developer based <br /> in Morocco.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideDown}
              className="md:w-0.5 md:mb-8 md:h-52 h-0.5 w-52 my-6 bg-gray-300"
            ></motion.div>
          </div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideToLeft}
            custom={0.3}
            className="md:text-7xl text-4xl md:leading-normal  font-black font-main text-black uppercase"
          >
            Web <br /> developer <br /> ui designer
          </motion.h1>

          <motion.button
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={0.6}
            className={`${styles.btn} col-start-2 mt-8 place-self-start relative self-start align-start px-6 py-2 font-semibold text-md font-main capitalize rounded bg-primary`}
          >
            view work
          </motion.button>
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideUp}
        custom={0.6}
        className="absolute -bottom-10 md:left-10 left-4 w-20 bg-cover h-20"
        style={{ backgroundImage: "url('/shape.svg')" }}
      ></motion.div>
    </section>
  );
};

export default Home;
