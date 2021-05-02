import styles from "@styles/Home.module.css";
import { motion } from "framer-motion";
import {
  slideUp,
  slideToRight,
  slideToLeft,
  slideDown,
} from "@helpers/animation";

const Home = () => {
  return (
    <section className="min-h-screen w-full ">
      <div className="relative max-w-screen-xl px-4 min-h-screen w-full mx-auto flex items-center">
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="space-x-10 col-span-2 justify-between items-end flex">
            <motion.p className="text-2xl  transform -rotate-90  text-gray-500 mb-20 font-main  capitalize">
              front-end reactjs <br />
              developer based <br /> in Morocco.
            </motion.p>
            <div className="w-0.5 ml-20 h-52 bg-gray-300"></div>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={slideUp}
              className="text-7xl leading-normal mb-4 font-black font-main text-black uppercase"
            >
              Web <br /> developer <br /> ui designer
            </motion.h1>
          </div>

          <div></div>
          <motion.button
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={0.4}
            className={`${styles.btn} place-self-start relative self-start align-start px-6 py-2 font-semibold text-xl font-main capitalize rounded bg-primary`}
          >
            view work
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Home;
