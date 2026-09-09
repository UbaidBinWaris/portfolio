import faqData from "../data/faqData";
import { jsonLd } from "../lib/metadata";
export default function FAQSection({ questions = faqData }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full bg-[#0A1930] px-6 py-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow">BEFORE WE BUILD</p>
        <h2 id="faq-heading" className="text-3xl text-white font-semibold mb-8">
          Frequently asked questions
        </h2>
        <div className="detail-faq text-white">
          {questions.map(({ question, answer }) => (
            <details key={question}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
