"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text ">Syahban's Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 animate-gradient-x">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-slate-300 my-5 max-w-[600px]"
        >
          I&apos;am a Full Stack Software Engineer with experience in Website,
          Sistem Internet of Things, and a designer too. Check out my projects
          and skills.
        </motion.p>
        <motion.div variants={slideInFromLeft(1)}>
          <div className="relative group">
            <div className="relative w-64 h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
              <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

              <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
                <a href="/other/CV_Syahban_Syaputra.pdf" download="Syahban_CV.pdf">
                  <button
                    name="text"
                    className="flex items-center justify-center gap-2 font-semibold text-lg h-full opacity-90 w-full px-4 py-3 rounded-xl bg-black cursor-pointer"
                  >
                    Download CV
                    <Image
                      src="/other/download.png"
                      alt="Download"
                      width={30}
                      height={30}
                    />
                  </button>
                </a>
              </div>
              <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-blue-400 to-purple-600 blur-[30px]"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/page/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
