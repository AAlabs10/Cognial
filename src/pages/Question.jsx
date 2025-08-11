import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

// FAQ data
const faqs = [
  {
    question: 'What is CogniAI?',
    answer: 'Cognio AI is a powerful analytics platform that delivers AI-driven insights, enabling businesses to optimize performance, enhance efficiency, and make smarter, data-backed decisions effortlessly.',
  },
  {
    question: 'What industries benefit from CogniAI?',
    answer: 'CogniAI is versatile and benefits a wide range of industries including e-commerce, finance, marketing, healthcare, and more by providing tailored data analytics solutions.',
  },
  {
    question: 'Is my data secure with CogniAI?',
    answer: 'Yes, we prioritize data security. CogniAI employs end-to-end encryption and complies with industry-standard security protocols to ensure your data is always protected.',
  },
  {
    question: 'What kind of support is available?',
    answer: 'We offer comprehensive support including a detailed knowledge base, email support, and dedicated account managers for our enterprise clients to ensure you get the help you need.',
  },
  {
    question: 'Does CogniAI offer a free trial?',
    answer: 'Yes, CogniAI offers a free trial so you can experience the full power of our platform. You can also start with our free Basic Plan to explore essential features.',
  },
];

// Accordion Item Component
const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className={`border-b border-gray-100 rounded-2xl transition-all duration-300 ${isOpen ? 'bg-orange-50/70 p-6' : 'bg-white p-6'}`}>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-base font-semibold text-gray-800">{faq.question}</h3>
        <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${isOpen ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
          {isOpen ? <FiMinus /> : <FiPlus />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-40 mt-4' : 'max-h-0'}`}
      >
        <p className="text-sm text-gray-600 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};


// Main Question Component
const Question = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item is open by default

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white font-sans py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Header */}
          <div className="lg:sticky top-24">
            <p className="text-sm font-bold text-orange-500 tracking-wide uppercase">
              Frequently Asked Questions
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Your Questions <span className="text-orange-500">Answered</span> – Everything You <span className="text-orange-500">Need</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-500">
              Find clear answers to common questions about our services and features.
            </p>
            <a
              href="#"
              className="mt-8 inline-block bg-black text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-800 transition-colors"
            >
              See All FAQ's
            </a>
          </div>

          {/* Right Column: Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;