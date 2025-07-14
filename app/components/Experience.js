"use client";
import React from "react";
import experienceData from "@/app/data/experienceData";

export const Experience = () => {
  return (
    <section className="w-full bg-[#0A1930] p-8 flex flex-col items-start justify-start">
      <h2 className="text-3xl font-bold text-[#63B8B2] m-5">Experiences</h2>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col justify-between bg-[#112240] rounded-2xl p-6 shadow-lg hover:scale-[1.03] transition-transform duration-300 min-h-[300px]"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#63B8B2]">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500 italic mb-4">
                  {exp.duration}
                </p>
              </div>
              <p className="text-gray-300 text-justify mt-auto">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
