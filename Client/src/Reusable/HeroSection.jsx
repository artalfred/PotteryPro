import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

function HeroSection({
  Title,
  SubTitle,
  Description,
  btnName,
  btnBackground,
  btnColor,
  btnHover,
  TextColor,
  SectionName,
  btnLink,
}) {
  return (
    <div className="hero--section py-[4rem] md:py-[8rem] 2xl:py-[12rem] px-[1rem]">
      <div className="grid justify-center items-center container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h6 className={`${TextColor} text-center`}>{SubTitle}</h6>
          <div className="flex justify-center">
            <h1
              className={`${TextColor} ${
                !SectionName
                  ? "2xl:text-7xl lg:text-7xl md:text-6xl sm:text-4xl text-4xl"
                  : "2xl:text-6xl lg:text-6xl md:text-5xl sm:text-3xl text-3xl"
              }  w-full 2xl:w-3/6 lg:w-4/6 md:w-5/6 sm:w-full text-center`}
            >
              {Title}
            </h1>
          </div>

          <div className="flex justify-center mt-6">
            <p
              className={`w-75 ${TextColor} sm:w-full md:w-3/4 lg:w-2/4  text-center Dm-body font-light`}
            >
              {Description}
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center mt-6">
          <Button
            btnName={btnName}
            btnBackground={btnBackground}
            color={btnColor}
            btnHover={btnHover}
            btnLink={btnLink}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
