import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

// Data for the pricing plans
const pricingPlans = [
  {
    name: 'Basic Plan',
    description: 'Essential features at no cost to start your journey.',
    price: 'Free',
    pricePeriod: '',
    buttonText: 'Start a Project',
    features: [
      'Essential startup tools',
      'Basic workflow integrations',
      'Standard customer support',
      'Basic system performance',
    ],
    isHighlighted: false,
  },
  {
    name: 'Pro Plan',
    description: 'Unlock premium tools and features to boost business efficiency.',
    price: '$1,200',
    pricePeriod: '/Month',
    buttonText: 'Start a Project',
    features: [
      'Advanced business tools',
      'Enhanced platform integrations',
      'Priority customer support',
      'Smart data insights',
    ],
    isHighlighted: true,
    image: 'hand.jpg', // Placeholder for the phone image
  },
  {
    name: 'Enterprise Plan',
    description: 'Scalable solutions tailored for growing enterprises.',
    price: '$3,400',
    pricePeriod: '',
    buttonText: 'Start a Project',
    features: [
      'Custom enterprise solutions',
      'Dedicated business support',
      'Advanced security features',
      'Unlimited system integrations',
    ],
    isHighlighted: false,
  },
];

// Reusable component for a single pricing card
const PricingCard = ({ plan }) => {
  const cardBaseStyle = 'flex-shrink-0 p-8 rounded-3xl transition-all duration-300';
  const highlightedCardStyle = 'bg-orange-50/70 border border-orange-200 w-full max-w-md lg:max-w-lg';
  const standardCardStyle = 'bg-white border border-gray-100 shadow-sm w-80 flex flex-col';

  return (
    <div className={`${cardBaseStyle} ${plan.isHighlighted ? highlightedCardStyle : standardCardStyle}`}>
      {plan.isHighlighted ? (
        // Layout for the highlighted "Pro" plan
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
            <p className="text-sm text-gray-500 mt-2 h-10">{plan.description}</p>
            <div className="mt-6">
              <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
              <span className="text-gray-500 font-medium">{plan.pricePeriod}</span>
            </div>
            <a href="#" className="mt-6 block w-full bg-black text-white text-center font-semibold py-3 rounded-full shadow-md hover:bg-gray-800">
              {plan.buttonText}
            </a>
            <ul className="mt-8 space-y-3 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium">
                  <BsFillCheckCircleFill className="text-black mr-3 text-base" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden sm:block sm:w-2/5 flex-shrink-0">
            <img src={plan.image} alt="Pro Plan" className="object-contain h-full w-full" />
          </div>
        </div>
      ) : (
        // Layout for the standard plans
        <>
          <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
          <p className="text-sm text-gray-500 mt-2 h-10">{plan.description}</p>
          <div className="mt-6">
            <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
            <span className="text-gray-500 font-medium">{plan.pricePeriod}</span>
          </div>
          <a href="#" className="mt-6 block w-full bg-black text-white text-center font-semibold py-3 rounded-full shadow-md hover:bg-gray-800">
            {plan.buttonText}
          </a>
          <div className="border-t border-gray-100 my-8"></div>
          <ul className="space-y-3 text-sm flex-grow">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center text-gray-700 font-medium">
                <BsFillCheckCircleFill className="text-black mr-3 text-base" />
                {feature}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};


// Main Price component that orchestrates the layout
const Price = () => {
  return (
    <div className="bg-white font-sans py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-orange-500 font-bold tracking-wider uppercase">Pricing Plan</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Flexible Plans for Every <span className="text-orange-500">Need and Budget</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500">
            Choose the perfect plan to scale, save, and maximize value.
          </p>
        </div>
        
        {/* Pricing cards container */}
        <div className="mt-16">
        <div className="flex flex-wrap justify-center gap-8 mt-16">
  {pricingPlans.map((plan, index) => (
    <PricingCard key={index} plan={plan} />
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default Price;