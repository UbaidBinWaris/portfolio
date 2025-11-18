"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import experienceData from "@/app/data/experienceData";

// Register GSAP plugins only on client side
let isPluginRegistered = false;
if (typeof window !== 'undefined' && !isPluginRegistered) {
  gsap.registerPlugin(ScrollTrigger);
  isPluginRegistered = true;
}

export const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsContainerRef = useRef(null);
  
  // Check if mounted (client-side only)
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // GSAP Cinematic Animation Sequence
  useEffect(() => {
    // Ensure we're in browser environment and component is mounted
    if (typeof window === 'undefined' || !isMounted) return;
    if (isMobile) return; // Skip complex animations on mobile

    const ctx = gsap.context(() => {
      const heading = headingRef.current;
      const cards = cardsContainerRef.current?.querySelectorAll('.experience-card-wrapper');
      
      if (!heading || !cards || cards.length === 0) return;

      // Set initial states
      gsap.set(heading, {
        scale: 3,
        y: "30vh",
        x: "0",
        opacity: 0,
        xPercent: 0,
        textAlign: "center"
      });
      
      gsap.set(cards, {
        opacity: 0,
        y: 100,
        scale: 0.8
      });

      // Create animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4000", // Increased for slower animation
          pin: true,
          pinSpacing: true, // Ensure proper spacing after unpin
          scrub: 1.5, // Increased scrub for smoother, slower feel
          anticipatePin: 1,
          invalidateOnRefresh: true, // Recalculate on resize
          onEnter: () => {
            gsap.to(heading, {
              opacity: 1,
              duration: 0.3
            });
          },
          onLeave: () => {
            // Ensure content below is accessible
            ScrollTrigger.refresh();
          }
        }
      });

      // Step 1: Heading shrinks and moves to left-top position (0-40% of scroll)
      tl.to(heading, {
        scale: 1,
        y: 0,
        x: "-40%",
        xPercent: 0,
        duration: 0.6,
        ease: "power2.inOut"
      })
      
      // Step 2: Small pause (40-50% of scroll)
      .to({}, { duration: 0.1 })
      
      // Step 3: Cards fade in with stagger (50-100% of scroll)
      .to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: {
          each: 0.1,
          from: "start"
        },
        duration: 0.3,
        ease: "back.out(1.2)"
      }, ">-0.1");

    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [isMobile, isMounted]);

  return (
    <section
      ref={sectionRef}
      id="experiences"
      className="w-full bg-[#0A1930] scroll-mt-24 p-8 flex flex-col items-start justify-center relative"
      style={{ minHeight: '100vh' }}
      aria-label="Professional experience and work history"
    >
      <h2 
        ref={headingRef}
        className="text-3xl font-bold text-[#63B8B2] m-5 will-change-transform"
        style={{ transformOrigin: "center center", position: "relative", width: "100%" }}
      >
        Experiences
      </h2>
      
      <div 
        ref={cardsContainerRef}
        className="w-full max-w-[1500px] mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className="experience-card-wrapper flex flex-col items-center group/card"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Top Hover Info (only on md and up) */}
              <div
                className={`hidden md:block mb-3 text-sm text-center text-green-400 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {exp.topMessage}
              </div>

              {/* Card */}
              <div
                className={`experience-card flex flex-col justify-between bg-[#112240] rounded-2xl p-6 shadow-lg w-full h-[430px] transition-all duration-300 will-change-transform
                ${hoveredIndex !== null && hoveredIndex !== index ? "blur-sm opacity-60" : ""}
                ${hoveredIndex === index ? "scale-105 z-10 shadow-2xl shadow-[#63B8B2]/30" : ""}
              `}
              >
                {/* Top Section */}
                <div>
                  <div className="flex items-center gap-2 text-gray-600 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                    <span>&lt;h3&gt;</span>
                    <h3 className="text-xl font-semibold text-[#63B8B2] truncate">
                      {exp.title}
                    </h3>
                    <span>&lt;/h3&gt;</span>
                  </div>
                  <p className="text-sm text-gray-400">{exp.company}</p>
                  <p className="text-sm text-gray-500 italic mb-4">
                    {exp.duration}
                  </p>
                </div>

                {/* Description Section */}
                <p className="text-gray-300 text-justify mt-auto flex flex-col gap-2">
                  <span className="text-gray-600 font-medium">
                    &lt;description&gt;
                  </span>
                  {exp.description}
                  <span className="text-gray-600 font-medium">
                    &lt;/description&gt;
                  </span>
                </p>
              </div>

              {/* Bottom Hover Info (only on md and up) */}
              <div
                className={`hidden md:block mt-2 text-sm text-center text-cyan-400 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {exp.bottomMessage}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
