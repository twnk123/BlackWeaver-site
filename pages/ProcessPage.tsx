
import React, { useState } from 'react';
import { PROCESS_STEPS_DETAILED, PROCESS_FAQS } from '../constants';
import Button from '../components/Button';
import type { FaqItem as FaqItemType } from '../types';

const FaqItem: React.FC<{ item: FaqItemType }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-[#EAEAEA]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4"
            >
                <span className="font-semibold text-lg">{item.question}</span>
                <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </span>
            </button>
            {isOpen && (
                <div className="pb-4 pr-6 text-gray-600">
                    <p>{item.answer}</p>
                </div>
            )}
        </div>
    );
};

const ProcessPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-display text-5xl md:text-6xl font-bold">How We Ship in Days</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          A transparent, four-step process designed for speed and clarity.
        </p>
      </div>

      <div className="mt-20 space-y-12">
        {PROCESS_STEPS_DETAILED.map((step, index) => (
          <div key={step.name} className="flex items-start space-x-6">
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#111] text-white rounded-full flex items-center justify-center font-bold font-display text-xl">{index + 1}</div>
                {index < PROCESS_STEPS_DETAILED.length -1 && <div className="w-px h-16 bg-[#EAEAEA] mt-2"></div>}
            </div>
            <div className="flex-1 pt-2">
              <h2 className="font-display text-2xl font-bold">{step.name}</h2>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-24">
        <h2 className="text-center font-display text-4xl font-bold mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
            {PROCESS_FAQS.map(item => <FaqItem key={item.question} item={item} />)}
        </div>
      </div>


      <div className="mt-20 text-center">
        <Button to="/configurator" variant="primary">Start Configurator</Button>
      </div>
    </div>
  );
};

export default ProcessPage;
