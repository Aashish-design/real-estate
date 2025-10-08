import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Does SVD offer any resources for first-time homebuyers?",
    answer:
      "Yes, SVD offers guides, tools, and expert assistance to help first-time homebuyers navigate the process smoothly.",
  },
  {
    question: "How does SVD ensure the quality of its listings?",
    answer:
      "SVD verifies property details through a combination of manual review and automated checks to keep listings accurate and trustworthy.",
  },
  {
    question: "How can I stay updated with the latest property listings?",
    answer:
      "Subscribe to email alerts, enable notifications, or follow the Latest Listings section to get updates in real-time.",
  },
  {
    question: "What should I do if I’m interested in multiple properties?",
    answer:
      "Shortlist the properties, compare features side-by-side, and contact the respective agents/owners directly from each listing page.",
  },
  {
    question: "What payment methods does SVD accept for transactions?",
    answer:
      "SVD supports bank transfers, credit/debit cards, and secure escrow/payment gateway options depending on the listing.",
  },
  {
    question: "How do I contact the property owner or agent directly?",
    answer:
      "Each listing contains contact details (call, email, or chat). Use the Contact button on the listing to reach out.",
  },
];

export default function FAQAccordionSmooth() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-[100%] max-w-3xl mx-auto px-[0] md:px-4 py-[0] md:py-10">

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-300">
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
              className="w-full flex items-center justify-between py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
            >
              <span className="text-gray-800 font-[600] text-base text-[4.1vw] md:text-[1.25vw] font-[Cabinet]">
                {faq.question}
              </span>

              <span className="ml-4 flex-shrink-0">
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </span>
            </button>

            {/* Smooth expand/collapse using Framer Motion */}
            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.34, ease: [0.2, 0.8, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="py-3 text-gray-600 text-[3.8vw] md:text-[1vw] leading-relaxed font-[Cabinet]">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
