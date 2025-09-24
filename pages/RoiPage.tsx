
import React from 'react';
import RoiCalculator from '../components/RoiCalculator';

const RoiPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-display text-5xl md:text-6xl font-bold">ROI Calculator</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Estimate your potential savings by choosing BlackWeaver over a traditional agency. Adjust the complexity and timeline to see how the numbers change.
        </p>
      </div>
      <RoiCalculator />
    </div>
  );
};

export default RoiPage;
