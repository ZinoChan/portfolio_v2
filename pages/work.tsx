import Card from "@components/Card";
import { list, itemSlideUp } from "@helpers/animation";
import { motion } from "framer-motion";
import { projects } from "@data/projects";
import Link from "next/link";
import Heading from "@components/Heading";

const Work = () => {
  return (
    <div className="relative min-h-screen flex items-center py-32">
      <div className="max-w-screen-lg mx-auto w-full px-2">
        <Heading heading="work" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map(({ id, name, img, linkToPage, linkToSrc }) => (
            <motion.div variants={itemSlideUp} key={id}>
              <Link href={id}>
                <a>
                  <Card
                    title={name}
                    src={img}
                    link={linkToPage}
                    git={linkToSrc}
                  />
                </a>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
