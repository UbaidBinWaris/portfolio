// "use client";
// import React from "react";
// import experienceData from "@/app/data/experienceData";

// export const Experience = () => {
//   return (
//     <section id="experiences" className="w-full bg-[#0A1930] scroll-mt-24 p-8 flex flex-col items-start justify-start">
//       <h2 className="text-3xl font-bold text-[#63B8B2] m-5">Experiences</h2>
//       <div className="w-full max-w-7xl mx-auto">
//         {/* Group wrapper to control hover effects */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 group">
//           {experienceData.map((exp, index) => (
//             <div
//               key={exp.id}
//               className="experience-card flex flex-col justify-between bg-[#112240] rounded-2xl p-6 shadow-lg transition-all duration-300 min-h-[300px]
//                          hover:scale-[1.03] group-hover:blur-sm hover:!blur-none custom-pointer"
//             >
//               <div>
//                 <h3 className="text-xl font-semibold text-[#63B8B2]">
//                   {exp.title}
//                 </h3>
//                 <p className="text-sm text-gray-400">{exp.company}</p>
//                 <p className="text-sm text-gray-500 italic mb-4">
//                   {exp.duration}
//                 </p>
//               </div>
//               <p className="text-gray-300 text-justify mt-auto flex flex-col gap-2">
//                 <span className="text-gray-600 font-medium">&lt;description&gt;</span>
//                 {exp.description}
//                 <span className="text-gray-600 font-medium">&lt;/description&gt;</span>
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
"use client";
import React, { useState } from "react";
import experienceData from "@/app/data/experienceData";

export const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="experiences"
      className="w-full bg-[#0A1930] scroll-mt-24 p-8 flex flex-col items-start justify-start"
      aria-label="Professional experience and work history"
    >
      <h2 className="text-3xl font-bold text-[#63B8B2] m-5">Experiences</h2>
      <div className="w-full max-w-7xl mx-auto">
        {/* Global group to manage sibling hover effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 group">
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className="flex flex-col items-center group/card"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Top Hover Info (only on md and up) */}
              <div
                className={`hidden md:block mb-2 text-sm text-center text-yellow-300 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                🚀 Exploring new technologies every day!
              </div>

              {/* Card */}
              <div
                className={`experience-card flex flex-col justify-between bg-[#112240] rounded-2xl p-6 shadow-lg w-full h-[350px] transition-all duration-300
                ${hoveredIndex !== null && hoveredIndex !== index ? "blur-sm" : ""}
                ${hoveredIndex === index ? "scale-105 z-10" : ""}
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
                📌 Tip: Hover to explore highlights!
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
