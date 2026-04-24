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
  const [stars, setStars] = useState({ small: [], medium: [], large: [], shooting: [] });
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsContainerRef = useRef(null);
  
  // Check if mounted (client-side only)
  useEffect(() => {
    setIsMounted(true);
    
    // Generate star positions only on client side to avoid hydration mismatch
    setStars({
      small: Array.from({ length: 50 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        opacity: Math.random() * 0.7 + 0.3
      })),
      medium: Array.from({ length: 30 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 4,
        opacity: Math.random() * 0.6 + 0.4
      })),
      large: Array.from({ length: 15 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.8 + 0.2
      })),
      shooting: Array.from({ length: 5 }, () => ({
        left: Math.random() * 80,
        top: Math.random() * 60,
        delay: Math.random() * 10,
        duration: 2 + Math.random() * 2
      }))
    });
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

    const ctx = gsap.context(() => {
      const heading = headingRef.current;
      const cards = cardsContainerRef.current?.querySelectorAll('.experience-card-wrapper');
      
      if (!heading || !cards || cards.length === 0) return;

      // Mobile: Simple but unique "code compilation" effect
      if (isMobile) {
        // Heading: Glitch-in effect like code compiling
        gsap.fromTo(heading, 
          {
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)"
          },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Cards: Sequential "code loading" effect with matrix-style appearance
        cards.forEach((card, index) => {
          gsap.fromTo(card,
            {
              opacity: 0,
              y: 50,
              rotateX: -15,
              filter: "brightness(0.3) blur(5px)"
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: "brightness(1) blur(0px)",
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
              },
              delay: index * 0.1 // Stagger effect
            }
          );

          // Add subtle hover pulse on mobile
          card.addEventListener('touchstart', () => {
            gsap.to(card, {
              scale: 0.98,
              duration: 0.2,
              ease: "power2.inOut"
            });
          });

          card.addEventListener('touchend', () => {
            gsap.to(card, {
              scale: 1,
              duration: 0.2,
              ease: "power2.inOut"
            });
          });
        });

        return; // Exit early for mobile
      }

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
        opacity: 1,
        x: "500%",
        scale: 1
      });

      // Create animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=5500", // Increased for slower animation
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
        duration: 0.3,
        ease: "power2.inOut"
      })
      
      // Step 2: Small pause (40-50% of scroll)
      .to({}, { duration: 0.1 })
      
      // Step 3: Cards slide in from right to left one by one (50-100% of scroll)
      .to(cards, {
        x: 0,
        stagger: {
          each: 0.075,
          from: "start"
        },
        duration: 0.7,
        ease: "power2.out"
      }, ">-0.1");

    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [isMobile, isMounted]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full bg-[#060e1f] scroll-mt-24 p-8 flex flex-col items-start justify-center relative overflow-hidden"
      style={{ minHeight: '100vh' }}
      aria-labelledby="experience-heading"
    >
      {/* Animated Starfield Background - Only render on client */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Nebula Background Gradient */}
          <div className="absolute inset-0 bg-gradient-radial from-[#1a2f4a]/30 via-transparent to-transparent opacity-50" />
          
          {/* Stars Layer 1 - Small distant stars */}
          <div className="stars-layer-1 absolute inset-0">
            {stars.small.map((star, i) => (
              <div
                key={`star-small-${i}`}
                className="absolute w-[1px] h-[1px] bg-white rounded-full animate-twinkle"
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  animationDelay: `${star.delay}s`,
                  opacity: star.opacity
                }}
              />
            ))}
          </div>
          
          {/* Stars Layer 2 - Medium stars */}
          <div className="stars-layer-2 absolute inset-0">
            {stars.medium.map((star, i) => (
              <div
                key={`star-medium-${i}`}
                className="absolute w-[2px] h-[2px] bg-[#63B8B2] rounded-full animate-twinkle"
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  animationDelay: `${star.delay}s`,
                  opacity: star.opacity,
                  boxShadow: '0 0 3px rgba(99, 184, 178, 0.5)'
                }}
              />
            ))}
          </div>
          
          {/* Stars Layer 3 - Larger glowing stars */}
          <div className="stars-layer-3 absolute inset-0">
            {stars.large.map((star, i) => (
              <div
                key={`star-large-${i}`}
                className="absolute w-[3px] h-[3px] bg-white rounded-full animate-pulse-slow"
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  animationDelay: `${star.delay}s`,
                  opacity: star.opacity,
                  boxShadow: '0 0 6px rgba(255, 255, 255, 0.8), 0 0 10px rgba(99, 184, 178, 0.4)'
                }}
              />
            ))}
          </div>
          
          {/* Shooting Stars */}
          <div className="shooting-stars absolute inset-0">
            {stars.shooting.map((star, i) => (
              <div
                key={`shooting-${i}`}
                className="absolute w-[2px] h-[2px] bg-white rounded-full animate-shooting-star"
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  animationDelay: `${star.delay}s`,
                  animationDuration: `${star.duration}s`,
                  opacity: 0
                }}
              />
            ))}
          </div>
        </div>
      )}
      <div
        ref={headingRef}
        className="flex items-center gap-4 m-5 will-change-transform"
        style={{ transformOrigin: "center center", position: "relative", width: "100%" }}
      >
        <p className="text-[#63B8B2] font-mono text-sm tracking-widest shrink-0">05 /</p>
        <h2
          id="experience-heading"
          className="text-white font-bold text-2xl md:text-3xl shrink-0"
        >
          Experience
        </h2>
        <div className="flex-1 h-px bg-[#1a3a5c]" />
        <p className="text-gray-700 font-mono text-xs shrink-0 hidden md:block">git log --oneline</p>
      </div>
      
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

              {/* Card — git log commit style */}
              <div
                className={`experience-card flex flex-col bg-[#0A1930] border rounded-sm overflow-hidden w-full h-[430px] transition-all duration-300 will-change-transform
                ${hoveredIndex !== null && hoveredIndex !== index ? "blur-sm opacity-50" : "border-[#1a3a5c]"}
                ${hoveredIndex === index ? "scale-[1.03] z-10 border-[#63B8B2] glow-teal" : ""}
              `}
              >
                {/* Commit header bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f2744] border-b border-[#1a3a5c] shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-mono text-xs">commit</span>
                    <span className="text-[#63B8B2] font-mono text-xs">{exp.hash}</span>
                  </div>
                  {exp.active && (
                    <span className="inline-flex items-center gap-1 text-green-400 text-xs font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-status-pulse" />
                      active
                    </span>
                  )}
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col gap-3 flex-1 min-h-0">
                  {/* Title */}
                  <div>
                    <h3 className="text-white font-bold text-base leading-snug">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-[#63B8B2] text-xs font-mono">@{exp.company}</span>
                      <span className="text-gray-700">·</span>
                      <span className="text-gray-500 text-xs font-mono">{exp.duration}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#1a3a5c]" />

                  {/* Description as diff output */}
                  <div className="flex-1 overflow-hidden">
                    <p className="text-gray-600 font-mono text-xs mb-2">// commit message</p>
                    <p className="text-gray-300 text-xs leading-relaxed line-clamp-[8]">
                      {exp.description}
                    </p>
                  </div>
                </div>
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
