import { list, itemSlideUp } from "@helpers/animation";
import { motion } from "framer-motion";
import { projects } from "@data/projects";
import Heading from "@components/Heading";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import MetaTags from "@components/MetaTags";

const Work = () => {
  return (
    <>
      <MetaTags title="Work" />
      <section className="relative min-h-screen flex items-center py-28">
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
                <Link href={`/details/${id}`}>
                  <a>
                    <Image
                      src={img}
                      layout="fill"
                      className="rounded"
                      alt="work"
                    />
                  </a>
                </Link>
                <div className="mt-4 flex justify-between items-center">
                  <h4 className="font-main text-md font-bold capitalize">
                    {name}
                  </h4>
                  <div>
                    <a href={linkToPage} className="mr-4">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                    <a href={linkToSrc} className="mr-4">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Work;
