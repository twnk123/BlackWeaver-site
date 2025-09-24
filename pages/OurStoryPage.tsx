
import React from 'react';
import Button from '../components/Button';

const ValueChip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="border border-[#EAEAEA] rounded-full px-4 py-2 text-sm font-semibold">{children}</div>
);

const ProofBar: React.FC = () => (
    <div className="bg-[#F7F7F8] border-y border-[#EAEAEA] py-4">
        <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="font-semibold">3–5 day websites</div>
                <div className="font-semibold">Median savings €5,000</div>
                <div className="font-semibold">Time saved 8–12 weeks</div>
                <div className="font-semibold">Full source code</div>
            </div>
        </div>
    </div>
);


const OurStoryPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 space-y-12">
        <div className="text-center">
          <h1 className="font-display text-2xl text-gray-500">To hell with bloated agency bills.</h1>
          <p className="mt-6 font-display text-4xl md:text-5xl font-bold">
            BlackWeaver exists so founders get production software in days, at a flat price, with full code ownership.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <h2 className="font-display font-bold text-3xl text-[#111]">The moment we snapped</h2>
            <p>
                We watched simple builds turn into months and five-figure invoices. Projects held hostage by endless "discovery phases," hourly billing that rewards slowness, and template-flippers charging custom prices for off-the-shelf themes. Founders deserve better than vendor lock-in and surprise bills.
            </p>
            <h2 className="font-display font-bold text-3xl text-[#111]">What we do instead</h2>
            <p>
                Feature packs + ML-assisted assembly + human review. It’s a manufacturing line for software. You select pre-built, vetted components from our library, we assemble them into a cohesive application, and a senior engineer validates every line of code before handover. You pick, we ship, you own the repo.
            </p>
            <h2 className="font-display font-bold text-3xl text-[#111]">Delivery you can plan</h2>
            <p>
                Websites ship in 3–5 business days. Apps, Web+App combos, and automated Workflows are next on our roadmap. Our goal is to make software delivery as predictable as buying a product off a shelf.
            </p>
        </div>

        <div className="pt-8">
            <h3 className="font-display font-bold text-2xl text-center text-[#111] mb-8">Our Values</h3>
            <div className="flex flex-wrap justify-center gap-4">
                <ValueChip>Ownership over lock-in</ValueChip>
                <ValueChip>Days over months</ValueChip>
                <ValueChip>Clear scope over open tabs</ValueChip>
                <ValueChip>Proof over promises</ValueChip>
            </div>
        </div>
      </div>
      <div className="mt-20">
        <ProofBar />
      </div>
      <div className="mt-20 text-center">
        <Button to="/configurator" variant="primary">Start Configurator</Button>
      </div>
    </div>
  );
};

export default OurStoryPage;
