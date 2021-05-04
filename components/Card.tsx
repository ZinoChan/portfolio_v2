import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({ title, src, link, git }) => {
  return (
    <>
      <img src={src} className="rounded" alt="work" />
      <div className="mt-4 flex justify-between items-center">
        <h4 className="font-main text-md font-bold capitalize">{title}</h4>
        <div>
          <a href={link} className="mr-4">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
          <a href={git} className="mr-4">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
