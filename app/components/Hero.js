"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Ensure Framer Motion is installed: npm install framer-motion

export const Hero = () => {
  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      className="relative min-h-screen sm:h-screen w-full flex overflow-hidden text-white"
      aria-label="Hero section"
    >
      {/* Background video */}
      <video
        src="/bgvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50 z-10" />

      <div className="flex gap-16 flex-col md:flex-row justify-between px-10 items-center w-full h-full z-20">
        {/* <div className="flex h-1/2 flex-col justify-center items-center mt-20 md:items-start text-center md:text-left md:max-w-1/2"> */}
        <div className="flex h-1/2 flex-col justify-center items-center mt-20 md:items-start text-center md:text-left w-full md:w-[60%]">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold  text-gray-600 text-center whitespace-nowrap" suppressHydrationWarning>
              <span suppressHydrationWarning>&lt;h1&gt;</span>
              <span className="text-[clamp(1.5rem, 5vw, 4rem)] font-bold custom-pointer px-2 tracking-wide hover:text-white hover:cursor-pointer text-[#63B8B2]">
                Ubaid Bin Waris
              </span>
              <span suppressHydrationWarning>&lt;/h1&gt;</span>
            </h1>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }} // Slight delay for staggered effect
          >
            <p className="text-lg flex flex-col gap-4 md:text-xl px-4 mt-6 text-justify text-gray-600 max-w-2xl" suppressHydrationWarning>
              <span suppressHydrationWarning>&lt;p&gt;</span>
              <span className="text-gray-100">
                Full Stack Developer dedicated to performance, responsive
                design, and seamless user experiences, with expertise in RESTful
                APIs and scalable web architecture.
              </span>
              <span suppressHydrationWarning>&lt;/p&gt;</span>
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col md:w-[40%] w-full justify-center items-center border-[#0A1930] text-gray-600 ">
          {/* Profile Image */}
          <span className="w-[90%] md:w-[47%] text-end" suppressHydrationWarning>&lt;Image</span>
          <Image
            src="/me.jpeg"
            alt="Ubaid Bin Waris - Full Stack Developer professional portrait"
            width={450}
            height={300}
            className="w-full max-w-[300px] md:max-w-[450px] border-white shadow-lg object-cover"
            priority
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
