"use client";

import { useState } from "react";

const faqData = [
  {
    question: "This is an FAQ question?",
    answer:
      "Unfolded answer of the question that is long unfolded answer of the question that is longer. Text is longer unfolded answer of the question that is longer.",
  },
  {
    question: "This is an FAQ question?",
    answer:
      "Unfolded answer of the question that is long unfolded answer of the question that is longer. Text is longer unfolded answer of the question that is longer.",
  },
  {
    question: "This is an FAQ question?",
    answer:
      "Unfolded answer of the question that is long unfolded answer of the question that is longer. Text is longer unfolded answer of the question that is longer.",
  },
  {
    question: "This is an FAQ question?",
    answer:
      "Unfolded answer of the question that is long unfolded answer of the question that is longer. Text is longer unfolded answer of the question that is longer.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black uppercase text-center mb-4">
          FAQ
        </h2>
        <div className="w-full h-px bg-black mb-8" />

        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors ${
                  openIndex === index ? "bg-purple text-white" : "bg-white text-black hover:bg-gray-50"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-sm uppercase">{item.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 py-4 px-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
