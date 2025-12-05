"use client";
import React, { useState } from "react";
import faqData from "@/app/data/faqData";
import { ChevronDown } from "lucide-react";

export const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // FAQ Schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section 
        id="faq" 
        className="w-full bg-[#0A1930] py-16 px-8 flex flex-col items-center justify-center"
        aria-labelledby="faq-heading"
      >
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-[#63B8B2] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 mb-12 text-center max-w-2xl">
          Common questions about my services, skills, and collaboration process
        </p>

      <div className="w-full max-w-3xl space-y-4">
        {faqData.map((faq) => (
          <article 
            key={faq.id}
            className="bg-[#112240] rounded-xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#1d3557] transition-colors custom-pointer"
              aria-expanded={openId === faq.id}
              aria-controls={`faq-answer-${faq.id}`}
            >
              <h3 className="text-lg font-semibold text-white pr-4">
                {faq.question}
              </h3>
              <ChevronDown 
                className={`text-[#63B8B2] flex-shrink-0 transition-transform duration-300 ${
                  openId === faq.id ? 'rotate-180' : ''
                }`}
                size={24}
              />
            </button>
            
            <div
              id={`faq-answer-${faq.id}`}
              className={`overflow-hidden transition-all duration-300 ${
                openId === faq.id ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="px-6 pb-5 text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
    </>
  );
};

export default FAQSection;
