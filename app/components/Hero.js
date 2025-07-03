import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex  overflow-hidden text-white">
      {/* Background video */}
      <video
        src="/bgvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Heading text */}
      <div className="absolute inset-0 bg-opacity-50 z-10" />

      <div className="flex flex-col md:flex-row justify-between px-10 items-center w-full h-full z-20">
        <div className="flex h-1/2 flex-col justify-center items-center md:items-start text-center md:text-left md:max-w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-600 text-center px-2">
            &lt;h1&gt;
            <span className="text-5xl md:text-6xl font-bold text-gray-100 letter-spacing- text-center px-4">
              Ubaid Bin Waris
            </span>
            &lt;/h1&gt;
          </h1>

            <p className="text-lg md:text-xl text-start px-4 mt-6">
              I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. I specialize in both front-end and back-end development, ensuring seamless user experiences.
            </p>
          </div>
        <div className="flex h-1/2 border-white">
          <Image
            src="/me.jpg"
            alt="Profile Picture"
            width={450}
            height={300}
            className=" border-white shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};
