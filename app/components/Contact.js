"use client";
import React from "react";
import contactLinks from "@/app/data/contactLinks";

const Contact = () => {
  return (
    <section className="w-full bg-[#0A1930] py-16 px-8 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-[#63B8B2] mb-8">Contact Me</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {contactLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#112240] rounded-lg text-[#63B8B2] font-medium hover:bg-[#1d3557] transition"
          >
            <span className="text-xl ">{link.icon}</span>
            <span className="text-white">{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
