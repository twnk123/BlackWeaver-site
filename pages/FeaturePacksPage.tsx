
import React from 'react';
import { ALL_FEATURE_PACKS } from '../constants';
import Button from '../components/Button';

const FeatureCard: React.FC<{ name: string; description: string }> = ({ name, description }) => (
  <div className="bg-white p-6 rounded-2xl border border-[#EAEAEA] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
    <h3 className="font-display font-bold text-xl">{name}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const FeaturePacksPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-display text-5xl md:text-6xl font-bold">Feature Packs</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Assemble your application from our library of production-ready components.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ALL_FEATURE_PACKS.map((pack) => (
          <FeatureCard key={pack.name} name={pack.name} description={pack.description} />
        ))}
      </div>

      <div className="mt-20 text-center">
        <Button to="/configurator" variant="primary">Start Configurator</Button>
      </div>
    </div>
  );
};

export default FeaturePacksPage;
