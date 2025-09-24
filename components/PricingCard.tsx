import React from 'react';
import type { PricingTier } from '../types';
import Button from './Button';
import { Icon } from './Icon';
import ElectricBorder from './ElectricBorder';

const PricingCard: React.FC<PricingTier> = ({ name, price, description, features, mostPopular, eta }) => {
  const cardContainerClasses = "bg-white rounded-2xl p-8 relative flex flex-col h-full";
  
  const cardContent = (
    <>
      {mostPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#111] text-white text-xs font-bold px-3 py-1 rounded-full uppercase z-10">
          Most Popular
        </div>
      )}
      <div className="flex-grow">
        <h3 className="font-display text-lg font-bold uppercase tracking-wider">{name}</h3>
        <p className="mt-4">
          <span className="text-5xl font-bold font-display">€{price}</span>
        </p>
        <p className="mt-4 text-gray-500 text-sm h-12">{description}</p>
        <ul className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Icon name="check" className="w-5 h-5 text-gray-800 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <Button to="/configurator" variant={mostPopular ? "primary" : "secondary"} className="w-full">
            Start with {name}
        </Button>
        <p className="text-center mt-4 text-xs text-gray-400">ETA: {eta}</p>
      </div>
    </>
  );

  if (mostPopular) {
    return (
      <ElectricBorder
        color="#001eff"
        speed={1}
        chaos={0.4}
        thickness={1.5}
        style={{ borderRadius: 16 }}
        className="h-full"
      >
        <div className={cardContainerClasses}>
          {cardContent}
        </div>
      </ElectricBorder>
    );
  }

  return (
    <div className={`${cardContainerClasses} border border-[#EAEAEA] shadow-sm`}>
      {cardContent}
    </div>
  );
};

export default PricingCard;
