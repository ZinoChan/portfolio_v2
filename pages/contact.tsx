import Heading from "@components/Heading";
import {
  faFacebookF,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { item, itemSlideUp, list } from "@helpers/animation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_API}/api/contact`,
        data,
        config
      );
      if (response.status === 200) {
        reset();
        toast.success("Your Message is Successfully Sent");
      }
    } catch (err) {
      console.log(err.message);
      toast.error(
        "Error accured while sending your Message, please try again later"
      );
    }
  };

  return (
    <section className="min-h-screen flex items-center py-32">
      <div className="max-w-screen-lg w-full mx-auto px-2">
        <Heading heading="Contact me" />
        <div className="lg:grid-cols-2 grid grid-cols-1 gap-12 lg:max-w-none max-w-screen-sm mx-auto ">
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial="hidden"
            animate="visible"
            variants={list}
            className="w-full"
          >
            <motion.div variants={itemSlideUp} className="mb-4">
              <input
                type="text"
                name="name"
                {...register("name", {
                  required: { value: true, message: "this field is required" },
                })}
                placeholder="Your Name"
                className={`focus:outline-none shadow w-full border bg-transparent  p-2 border-gray-200  text-gray-500 rounded-md 
                ${errors.name && "ring-1 ring-red-500"}`}
              />
              <span className="text-red-300 text-sm font-main">
                {errors?.name?.message}
              </span>
            </motion.div>
            <motion.div variants={itemSlideUp} className="mb-4">
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: { value: true, message: "this field is required" },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: "Please enter a valid email",
                  },
                })}
                placeholder="Your Email"
                className={`focus:outline-none shadow w-full border bg-transparent  p-2 border-gray-200  text-gray-500 rounded-md 
                ${errors.email && "ring-1 ring-red-500"}`}
              />
              <span className="text-red-300 text-sm font-main">
                {errors?.email?.message}
              </span>
            </motion.div>
            <motion.div variants={itemSlideUp} className="mb-4">
              <textarea
                rows={6}
                name="msg"
                {...register("msg", {
                  required: { value: true, message: "this field is required" },
                  maxLength: {
                    value: 1000,
                    message: "Your message can't be more then 1000 characters",
                  },
                  minLength: {
                    value: 20,
                    message: "Your message can't be less then 20 characters",
                  },
                })}
                placeholder="Your Message"
                className={`focus:outline-none shadow w-full border bg-transparent  p-2 border-gray-200  text-gray-500 rounded-md 
                ${errors.msg && "ring-1 ring-red-500"}`}
              ></textarea>
              <span className="text-red-300 text-sm font-main">
                {errors?.msg?.message}
              </span>
            </motion.div>
            <motion.div variants={itemSlideUp} className="text-center">
              <button
                type="submit"
                className="rounded bg-primary text-black font-main font-bold px-4 py-1 place-self-center"
              >
                Submit
              </button>
            </motion.div>
          </motion.form>
          <div className="lg:block md:flex md:justify-between">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={list}
              className="mb-6"
            >
              <motion.h3
                variants={item}
                className="text-2xl font-main font-bold mb-4 capitalize"
              >
                Contact info :
              </motion.h3>

              <motion.div
                variants={item}
                className="flex mb-4 items-center space-x-4 text-gray-700"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="text-lg font-main">devzinochan@gmail.com</span>
              </motion.div>
              <motion.div
                variants={item}
                className="flex mb-4 items-center space-x-4 text-gray-700"
              >
                <FontAwesomeIcon icon={faPhone} />
                <span className="text-lg font-main">+212 629872534</span>
              </motion.div>
              <motion.div
                variants={item}
                className="flex mb-4 items-center space-x-4 text-gray-700"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span className="text-lg font-main">Benslimane, Morocco</span>
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={list}>
              <motion.h3
                variants={item}
                className="text-2xl font-main font-bold mb-4 capitalize"
              >
                Social Networks :
              </motion.h3>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={list}
                className="flex space-x-10 text-lg text-gray-700"
              >
                <motion.span
                  variants={itemSlideUp}
                  className="hover:text-primary"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </motion.span>
                <motion.span
                  variants={itemSlideUp}
                  className="hover:text-primary"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </motion.span>
                <motion.span
                  variants={itemSlideUp}
                  className="hover:text-primary"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </motion.span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
