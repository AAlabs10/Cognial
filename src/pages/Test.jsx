import React from 'react';

// Data for the testimonials
const testimonials = [
  {
    image: "man.jpg",
    quote: 'With CogniAI, we transformed raw data into actionable insights, improving productivity, streamlining processes, and enhancing strategic planning.',
    name: 'Daniel Pierce',
    title: 'CEO Kiera.io',
    metric: '100%',
    metricCaption: 'Verified Customer Testimonials',
  },
  {
    image: "Woman.jpg",
    quote: 'From raw data to real results, CogniAI boosts productivity, optimizes operations, and empowers smarter, data-driven business decisions with unmatched efficiency.',
    name: 'Saviera Joeal',
    title: 'Founder Lokalane.com',
    metric: '7x',
    metricCaption: 'Faster, Smarter, and Better!',
  },
];

// Reusable component for each testimonial card
const TestimonialCard = ({ image, quote, name, title, metric, metricCaption }) => (
  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
      {/* Main content: image, quote, and name */}
      <div className="flex-grow flex items-start gap-6">
        <img src={image} alt={name} className="w-24 h-24 rounded-2xl object-cover flex-shrink-0" />
        <div>
          <p className="text-gray-600 leading-relaxed">
            {quote}
          </p>
          <div className="mt-4">
            <p className="font-bold text-gray-800">{name}</p>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </div>
      {/* Metric Section */}
      <div className="flex-shrink-0 text-center w-full md:w-auto mt-4 md:mt-0">
        <p className="text-4xl lg:text-5xl font-bold text-gray-800">{metric}</p>
        <p className="text-xs text-gray-500 mt-1 max-w-[120px] mx-auto">{metricCaption}</p>
      </div>
    </div>
  </div>
);

// Main Test component
const Test = () => {
  return (
    <div className="bg-white font-sans py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="max-w-xl mb-6 md:mb-0">
            <p className="text-sm font-bold text-orange-500 tracking-wide uppercase">Testimonial</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              What Our Customers Say <span className="text-orange-500">About</span> Their Experience
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-500">
              Genuine feedback showcasing real success and customer satisfaction.
            </p>
          </div>
          <a href="#" className="flex-shrink-0 bg-black text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-800 transition-colors">
            See All Testimonial
          </a>
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;