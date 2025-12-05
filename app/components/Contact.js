// "use client";
// import React from "react";
// import contactLinks from "@/app/data/contactLinks";
// import Link from "next/link";

// const Contact = () => {
//   return (
//     <section id="contact" className="w-full bg-[#0A1930] py-16 px-8 flex flex-col items-center justify-center">
//       <h2 className="text-3xl font-bold text-[#63B8B2] mb-8">Contact Me</h2>

//       <div className="flex flex-wrap justify-center items-center gap-6">
//         <div>
//           <span className="text-gray-600 font-medium">&lt;Link href = &quot;</span>
//         </div>
//         {contactLinks.map((link) => (
//           <a
//             key={link.id}
//             href={link.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 px-6 py-3 hover:scale-105 bg-[#112240] custom-pointer rounded-lg text-[#63B8B2] font-medium hover:bg-[#1d3557] transition"
//           >
//             <span className="text-xl ">{link.icon}</span>
//             <span className="text-white">{link.name}</span>
//           </a>
//         ))}
//       <span className="text-gray-600 font-medium">&quot; &lt;/Link&gt;</span>
//       </div>
//     </section>
//   );
// };

// export default Contact;


// "use client";
// import React from "react";
// import contactLinks from "@/app/data/contactLinks";
// import { motion } from "framer-motion";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="w-full bg-[#0A1930] py-16 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold text-[#63B8B2] mb-12 text-center">
//         Contact Me
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
//         {contactLinks.map((link, index) => (
//           <motion.a
//             key={link.id}
//             href={link.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-3 px-6 py-4 bg-[#112240]/60 backdrop-blur-md rounded-xl 
//                        text-[#63B8B2] font-medium border border-white/10 shadow-md hover:shadow-[#63B8B2]/40 
//                        hover:scale-105 hover:bg-[#1d3557]/80 transition duration-300"
//             whileHover={{ scale: 1.08, rotate: 1 }}
//             whileTap={{ scale: 0.96 }}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             <span className="text-2xl">{link.icon}</span>
//             <span className="text-white">{link.name}</span>
//           </motion.a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Contact;

"use client";
import React from "react";
import contactLinks from "@/app/data/contactLinks";
import Link from "next/link";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="w-full bg-[#0A1930] py-16 px-8 flex flex-col items-center justify-center"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="text-3xl font-bold text-[#63B8B2] mb-8">Contact Me</h2>

      <nav aria-label="Social media and contact links">
        <div className="flex flex-wrap justify-center items-center gap-6">
          <div>
            <span className="text-gray-600 font-medium" aria-hidden="true">&lt;Link href = &quot;</span>
          </div>
          {contactLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 hover:scale-105 bg-[#112240] custom-pointer rounded-lg text-[#63B8B2] font-medium hover:bg-[#1d3557] transition"
              aria-label={`Contact via ${link.name}`}
            >
              <span className="text-xl" aria-hidden="true">{link.icon}</span>
              <span className="text-white">{link.name}</span>
            </a>
          ))}
          <span className="text-gray-600 font-medium" aria-hidden="true">&quot; &lt;/Link&gt;</span>
        </div>
      </nav>
    </section>
  );
};

export default Contact;
